import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";
import { Project } from "@/models/project";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {
        const octo = new Octokit({
            auth: process.env.Github_Secret
        });

        const response = await octo.request('GET /user/repos', {
            owner: process.env.Github_User,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });
      
          let ps = response.data.map(x => {
            let project = new Project();
              project.name = x.name;
              project.cloneUrl = x.clone_url;
              project.createdAt = x.created_at as string;
              project.description = x.description as string;
              project.githubProjectUrl = x.html_url as string;
              project.lastUpdate = x.updated_at as string;
              project.language = x.language as string;
              return project;
          })
          const projects =  ps.filter(x => !x.name.includes('cv')).filter(x => !x.name.includes('Benexdrake'));

        res.status(200).json(projects)
    }    
}
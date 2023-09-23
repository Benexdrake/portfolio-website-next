import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";
import { GithubUser } from "@/models/githubUser";


export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
    if(req.method === 'GET')
    {
        const octo = new Octokit({
            auth: process.env.Github_Secret
        });

        const response = await octo.request('GET /user', {
            owner: process.env.Github_User,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });
          let u = response.data;
          let user = new GithubUser();
          
          user.avatar = u.avatar_url as string;
          user.bio = u.bio as string;
          user.createdAt = u.created_at as string;
          user.followers = u.followers;
          user.following = u.following;
          user.location = u.location as string;
          user.name = u.name as string;
          user.publicRepos = u.public_repos;
          user.reposUrl = u.repos_url;
          user.url = u.html_url;

        res.status(200).json(user)
    }    
}
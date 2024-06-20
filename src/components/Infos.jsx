import React, { useEffect, useState } from "react";

const Infos = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUser(json);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <ul className="text-center">
        <h1 className="mt-4 fw-bold">Github user</h1>
        <li className="fw-bold fs-2 my-3">{user.name}</li>
        <li>
          <img src={user.avatar_url} alt="Jonh Doe Avatar" width={200}/>
        </li>
        <li className="my-3">{user.bio}</li>
        <li className="my-3" >Abonnés: {user.followers}</li>
        <li className="my-3" >Abonnements: {user.following}</li>
        <li className="my-3" >Créé le: {user.created_at}</li>
        <li className="my-3" >Modifié le: {user.updated_at}</li>
        <li className="mb-5" >URL repositories: <a href={user.repos_url} className="text-primary" target="_blank">{user.repos_url}</a></li>
      </ul>
    </div>
  );
};

export default Infos;

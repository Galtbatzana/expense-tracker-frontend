"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  // const [articles, setArticles] = useState([]);

  // useEffect(()=> {
  //   fetch("http://localhost:4000/articles")
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setArticles(data);
  //   });
  // }, []);

  // return (
  //   <main>
  //     {
  //       articles.map((article)=>(
  //         <div key={article.id}>{article.title}</div>
  //       ))
  //     }
  //   </main>
  // );
  /////////////////////////////////////////////////////////////////////////
  const [categories, setCategories] = useState([]);

  //automataar render hiij bga function loadList geed ner ugchie
  function loadList() {
    fetch("http://localhost:4000/categories/list")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }

  useEffect(() => {
    loadList();
  }, []);
///////////////////////////////////////////////////////////////////////////
  function createNew() {
    const name = prompt("Name...");

    fetch(`http://localhost:4000/categories/create?name=${name}`)
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  }
  //ingeed uuruu backend ruu hussen data-gaa yawuulj chadaj bn
///////////////////////////////////////////////////////////////////////////
  function editCategoryName () {
    fetch(`/categories/update?name=${name}`)
    const {id, name} = req.query;
    const index = categories.findIndex((cat)=>(cat.id===id));
    categories[index].name = name;
    fs.writeFileSync("categories.json", JSON.stringify(categories))

  }

  function deleteCategoryName () {
    fetch(`http://localhost:4000/categories/delete?name=${id}`)
    let { id } = req.query;
    let categories = categories.filter((cat)=>(cat.id === id));
    fs.writeFileSync("categories.json", JSON.stringify(categories));
  }


  return (
    <main>
      <Button onClick={createNew}>Add new</Button>

      {categories.map((category) => (
        <div key={category.name}>
          {category.name}
          <Button onClick={editCategoryName}>Edit</Button>
          <Button onClick={deleteCategoryName}>Del</Button>
          
        </div>
      ))}
    </main>
  );
}

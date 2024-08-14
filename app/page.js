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
  ////////////////////////////////////////////////////////
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

  function createNew() {
    const name = prompt("Name...");

    fetch(`http://localhost:4000/categories/create?name=${name}`)
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  }
  //ingeed uuruu backend ruu hussen data-gaa yawuulj chadaj bn

  function editCategoryName () {

  }

  function deleteCategoryName () {

  }

  
  return (
    <main>
      <Button onClick={createNew}>Add new</Button>

      {categories.map((category) => (
        <div key={category.name}>
          {category.name}
          <Button onClick={}>Edit</Button>
          <Button onClick={}>delete</Button>
          
        </div>
      ))}
    </main>
  );
}

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
    fetch("http://localhost:4000/categories")
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
    fetch(`http://localhost:4000/categories`,{
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: { "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  }
  //ingeed uuruu backend ruu hussen data-gaa yawuulj chadaj bn
///////////////////////////////////////////////////////////////////////////
  function editCategoryName (id, oldName) {
    const name = prompt("Are you sure?", oldName);
    if (name) {
      fetch(`http://localhost:4000/categories/${id}`,{
        method: "PUT",
        body: JSON.stringify({ name: name }),
        headers: { "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then(() => {
          loadList();
        });
    }
  }
/////////////////////////////////////////////////////////////////////////
  function deleteCategoryName (id,oldName) {
    if (confirm("are you sure?")) {
      fetch(`http://localhost:4000/categories/${id}`,{
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 404) {
            alert("Category not found");
          }
          loadList();
        });
    }
  }


  return (
    <main>
      <Button onClick={createNew}>Add new</Button>

      {categories.map((category) => (
        <div key={category.id}>
          {category.name}
          <Button onClick={() => editCategoryName(category.id, category.name)}>Edit</Button>
          <Button onClick={() => deleteCategoryName(category.id,category.name)}>Del</Button>
          
        </div>
      ))}
    </main>
  );
}

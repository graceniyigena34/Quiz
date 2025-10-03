async function fetchDataForAllAuthors() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
}

async function displayAllAuthors() {
  const posts = await fetchDataForAllAuthors();

  if (posts && posts.length > 0) {
    posts.forEach((post) => {
      console.log("Post id:", post.id);
      console.log("Author id:", post.user.id);
      console.log("Author name:", post.user.name);
      console.log("Article (title):", post.title);
      console.log("Comments:", post.comments.length);
      console.log("----");
    });
  } else {
    console.log("No posts found");
  }
}

displayAllAuthors();



// // Question 2

// async function fetchDataForproducts(){
//     try{

//         // make an api request 
// const response= await response (`https://dummyjson.com/products/${displayproduct}`);
// // check if the response is successful 
// if (!response.ok){
//     throw new error(`HTTP.error!status:${response.error
//     }`);
// }
// // to transform data into json format 
// const data = await response.json
// return data;




//     }catch (error){
//         console.log("Error fetching user data:", error);
//     }
// }

// async function displayproduct(){
//      const posts = await fetchDataForAllProducts();

//   if (posts && posts.length > 0) {
//     posts.forEach((post) => {
//       console.log("Post id:", post.id);
//       console.log("Product id:", post.product.id);
//       console.log("Product title:", post.product.title);
//       console.log("Price (title):", post.title);
//       console.log("Comments:", post.comments.length);
//       console.log("----");
//     });
//   } else {
//     console.log("No posts found");
//   }
// }

// displayproducts();








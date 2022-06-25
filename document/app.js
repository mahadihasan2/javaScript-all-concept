const thirdTitle = document.getElementById('third-title');
thirdTitle.style.textAlign = 'center';
document.getElementById('third-title').innerText = "My Awesome Blog-3"
thirdTitle.style.border = '1px solid green'
const secondTitle = document.getElementById('second-title');
secondTitle.style.textAlign = 'center';
// secondTitle.style.margin = '10px';
// secondTitle.style.padding = '30px';
secondTitle.style.border = '1px solid green'
document.getElementById("second-title").innerText = "My Awesome Blog-2";
const firstTitle = document.getElementById('first-title');
firstTitle.style.textAlign = 'center';
firstTitle.style.border = '1px solid green'
const headerSection = document.getElementById("header-section");
headerSection.style.textAlign = 'center';



// CreateElement 
const li = document.createElement('li')
li.innerText = 'Book List-5';
const ul = document.getElementById('Book-list');
ul.appendChild(li);

// create a Html tag and write the some Article
const article = document.createElement('article');
article.classList.add('blog')
const h3 = document.createElement("h3");
h3.innerText = "My awesome blog-4";
const p = document.createElement('p');
p.innerText = "this is the map of article in the market";
article.appendChild(h3)
article.appendChild(p)

// add the blog section 
const blogSection = document.getElementById('blogs');
blogSection.appendChild(article)

// single add css atribute 
h3.style.textAlign = 'center';
h3.style.border = '1px solid green';
h3.style.fontSize = '24px';
















const Blogs = document.getElementsByClassName('blog');
for (const blog of Blogs) {
    blog.style.border = '1px solid orange';
    blog.style.borderRadius = '10px';
    blog.style.margin = '10px'
    blog.style.backgroundColor = "tomato";
}
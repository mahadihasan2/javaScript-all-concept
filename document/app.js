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

const Blogs = document.getElementsByClassName('blog');
for (const blog of Blogs) {
    blog.style.border = '1px solid orange';
    blog.style.borderRadius = '10px';
    blog.style.margin = '10px'
}
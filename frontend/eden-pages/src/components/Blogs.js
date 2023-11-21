import React from 'react';
import "./Blogs.css"
function Blogs() {
  return (
    <div className="blogs">
      <h2 class="title">Latest Blogs</h2>
    <section class="tiles">
        <div class="tile">
            <img  src="/food1.png" alt="Image 1"></img>
            <h3>Sustainable Farming Practices</h3>
            <p>Discuss eco-friendly and sustainable farming techniques, such as organic farming, permaculture, and no-till farming.</p>
            <button class="btn">Read more</button>
        </div>

        <div class="tile">
            <img  src="/food1.png" alt="Image 2"></img>
            <h3>Sustainable Farming Practices</h3>
            <p>Discuss eco-friendly and sustainable farming techniques, such as organic farming, permaculture, and no-till farming.</p>
            <button class="btn">Read more</button>
        </div>
        
        <div class="tile">
            <img  src="/food1.png" alt="Image 3"></img>
            <h3>Sustainable Farming Practices</h3>
            <p>Discuss eco-friendly and sustainable farming techniques, such as organic farming, permaculture, and no-till farming.</p>
            <button class="btn">Read more</button>
        </div>
    </section>
    </div>
  );
}

export default Blogs;

import "./service.css"
import video1 from "../assets/video1.mp4";

function Services() {
  return (
    <div className="Servs">
     <section>
     <div class="Service1">
        <h2>Services</h2>
        <h3>Eden Solutions Services</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia impedit
          molestiae eaque sit doloribus? Aut nihil, hic consectetur rerum
          ratione, necessitatibus autem in quos veritatis rem ipsa obcaecati,
          eum cum!
        </p>
        <a class="btn">Contact Us</a>
      </div>
      <div class="Services">
      <video autoPlay muted loop>
  <source src={video1} type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <div class="Service">
        <div class="img-cont">
        <img src="/food1.png" alt="food" />
      </div>
        <h4>Marketplace</h4>
        <p>
          Connect with the heart of agriculture in Eden's marketplace. Buy and
          sell fresh farm produce directly, ensuring fair prices for farmers and
          reducing food waste. Join us in supporting sustainable agriculture and
          relish the goodness of locally sourced delights.
        </p>
        <a href="#" class="btn">Contact Us</a>
      </div>

      <div class="Service">
        <div class="img-cont">
        <img src="/food1.png" alt="food" />
      </div>
        <h4>Marketplace</h4>
        <p>
          Connect with the heart of agriculture in Eden's marketplace. Buy and
          sell fresh farm produce directly, ensuring fair prices for farmers and
          reducing food waste. Join us in supporting sustainable agriculture and
          relish the goodness of locally sourced delights.
        </p>
        <a href="#" class="btn">Contact Us</a>
      </div>
      <div class="Service">
        <div class="img-cont">
        <img src="/food1.png" alt="food" />
      </div>
        <h4>Marketplace</h4>
        <p>
          Connect with the heart of agriculture in Eden's marketplace. Buy and
          sell fresh farm produce directly, ensuring fair prices for farmers and
          reducing food waste. Join us in supporting sustainable agriculture and
          relish the goodness of locally sourced delights.
        </p>
        <a href="#" class="btn">Contact Us</a>
      </div>
    </div>
    </section>
    </div>
  );
}

export default Services;

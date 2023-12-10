import "./service.css";
import video1 from "../../assets/video1.mp4";
import cropcare from "../../assets/cropcare.jpg";
import insights from "../../assets/insights.jpg";
import market from "../../assets/marketplace.jpg";
import farmer from "../../assets/farmer.jpg";
import forest from "../../assets/forest.jpg";
import hope from "../../assets/hope.jpg";
function Services() {
  return (
    <div className="Servs">
      <section>
        <div class="Service1">
          <h2>Services</h2>
          <h3>Eden Solutions Services</h3>
          <p>
            Eden's integrated agricultural platform offers a marketplace
            connecting farmers and consumers, cutting-edge SmartCropCare
            technology for optimized crop management, Market Insights for
            informed decision-making, and comprehensive Eden Solutions Services,
            fostering sustainable agriculture and reducing food waste!
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
              <img src={market} alt="food" />
            </div>
            <h4>Marketplace</h4>
            <p>
              Connect with the heart of agriculture in Eden's marketplace. Buy
              and sell fresh farm produce directly, ensuring fair prices for
              farmers and reducing food waste. Join us in supporting sustainable
              agriculture and relish the goodness of locally sourced delights.
            </p>
            <a href="#" class="btn">
              Contact Us
            </a>
          </div>

          <div class="Service">
            <div class="img-cont">
              <img src={cropcare} alt="food" />
            </div>
            <h4>SmartCropCare</h4>
            <p>
              Connect with the heart of agriculture in Eden's marketplace. Buy
              and sell fresh farm produce directly, ensuring fair prices for
              farmers and reducing food waste. Join us in supporting sustainable
              agriculture and relish the goodness of locally sourced delights.
            </p>
            <a href="#" class="btn">
              Contact Us
            </a>
          </div>
          <div class="Service">
            <div class="img-cont">
              <img src={insights} alt="food" />
            </div>
            <h4>Market Insights</h4>
            <p>
              Connect with the heart of agriculture in Eden's marketplace. Buy
              and sell fresh farm produce directly, ensuring fair prices for
              farmers and reducing food waste. Join us in supporting sustainable
              agriculture and relish the goodness of locally sourced delights.
            </p>
            <a href="#" class="btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

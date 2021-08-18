import about from './assets/img/about.jpg';
import client1 from './assets/img/clients/client-1.png';
import client2 from './assets/img/clients/client-2.png';
import client3 from './assets/img/clients/client-3.png';
import client4 from './assets/img/clients/client-4.png';
import client5 from './assets/img/clients/client-5.png';
import client6 from './assets/img/clients/client-6.png';
import service1 from './assets/img/services-1.jpg';
import service2 from './assets/img/services-2.jpg';
import service3 from './assets/img/services-3.jpg';
const Body = () => {
    const clickFunction = (e) => {
        console.log("fuck you" + e.target)
    }
    return (
        <div className ="contetn">

          <section id="hero">
  <div class="hero-container">
    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">


        <div class="carousel-item active" style={{backgroundImage: `url(${"https://wallpaperaccess.com/full/2655944.jpg"})`}}>
          <div class="carousel-container">
            <div class="carousel-content container">
              <h2 class="animate__animated animate__fadeInDown">Bienvenue chez <span>nous</span></h2>
              <p class="animate__animated animate__fadeInUp">IT Inspire Maroc met à votre disposition tous les moyens et outils nécessaires dans les domaines du impression numérique, du Web et de la Communication.</p>

              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">savoir plus</a>
            </div>
          </div>
        </div>


      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
  </div>
</section>
  <main id="main">

   <section id="about" className="about">

    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>#À PROPOS DE NOUS</h2>
      </div>
      <div className="row gx-0">

        <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div className="content">
            <h3>Qui sommes-nous ?
            </h3>
            <h2>Le numérique,
              l'avenir de votre société.</h2>
            <p>
              La transformation numérique se développe, s’intensifie et fait partie intégrante de notre société. Elle devient un enjeu majeur pour la réussite de votre entreprise.Tout en gardant les valeurs fondamentales sur lesquelles repose votre entreprise, le numérique vous aide à développer vos offres, orienter votre stratégie pour atteindre vos objectifs. Et vous fournissez ainsi à vos clients une expérience nouvelle, tout en améliorant vos services.
            </p>
            <div className="text-center text-lg-start">
              <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                <span>savoir plus</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>


        <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
          <img src={about} className="img-fluid" alt=""/>
        </div>

      </div>
    </div>

  </section>


    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Clients</h2>
        </div>

        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

          <div className="col-lg-2 col-md-4 col-6">
            <div className="client-logo">
              <img src={client1} className="img-fluid" alt="" data-aos="flip-right"/>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="client-logo">
              <img src={client2}  className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="100"/>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="client-logo">
              <img src={client3}  className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="200"/>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="client-logo">
              <img src={client4}  className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="300"/>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="client-logo">
              <img src={client5}  className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="400"/>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="client-logo">
              <img src={client6}  className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="500"/>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="services" className="services section-bg">
      <div className="container">

      <div className="section-title-1">
        <h2>Services</h2>
      </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="card card-one">
              <div className="card-img">
                <img src={service1} alt="..."/>
              </div>
              <div className="card-body card-body-one">
                <h5 className="card-title"><a href="">impression numérique</a></h5>
                <p className="card-text">nos presses numériques de toute dernière génération impriment en couleur et en noir & blanc ont une qualité de rendu toujours plus proche de l’impression offset. La fiabilité des couleurs nous permet aujourd’hui une impression identique entre l’épreuve papier et le rendu final du tirage.</p>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-right">
            <div className="card card-two">
              <div className="card-img">
                <img src={service2} alt="..."/>
              </div>
              <div className="card-body card-body-two">
                <h5 className="card-title"><a href="">IT CONSULTING</a></h5>
                <p className="card-text">Êtes-vous préoccupé par la fiabilité de votre technologie? Êtes-vous confus sur ce dont vous avez vraiment besoin? SphereIT peut répondre à toutes vos questions technologiques pour vous permettre de vous concentrer sur la croissance de votre entreprise..</p>
                <div className="read-more two"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-left">
            <div className="card card-three">
              <div className="card-img">
                <img src={service3} alt="..."/>
              </div>
              <div className="card-body card-body-three">
                <h5 className="card-title"><a href="">Développement Web</a></h5>
                <p className="card-text">Internet est un support de communication devenu incontournable pour les entreprises. Il apporte une visibilité unique ! Créer un site Internet pour votre entreprise vous permet d’accroître votre chiffre d’affaires en élargissant la cible de vos prospects. </p>
                <div className="read-more "><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>

          </div>


        </div>

      </div>
    </section>
    <section id="cta" className="cta">
      <div className="container">

        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3>Vous avez un projet ?</h3>
            <p> Contactez-nous sans hésiter, nous nous ferons un plaisir de vous aider.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">Contactez-nous</a>
          </div>
        </div>

      </div>
    </section>
    <div id="contact" className="contact-area">
      <div className="contact-inner area-padding">
        <div className="contact-overly"></div>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2>Contact us</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="contact-icon text-center">
                <div className="single-icon">
                  <i className="fa fa-mobile"></i>
                  <p>
                    Call: +1 5589 55488 55<br/>
                    <span>Monday-Friday (9am-5pm)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="contact-icon text-center">
                <div className="single-icon">
                  <i className="fa fa-envelope-o"></i>
                  <p>
                    Email: info@example.com<br/>
                    <span>Web: www.example.com</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="contact-icon text-center">
                <div className="single-icon">
                  <i className="fa fa-map-marker"></i>
                  <p>
                    Location: Aïn Sebaâ Casablanca 20250<br/>
                    <span>Morocoo</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">


            <div className="col-md-6 col-sm-6 col-xs-12">

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3322.963569388652!2d-7.5152638!3d33.6062497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb70f764eae3%3A0xf048de37eef71d8!2sA%C3%AFn%20Seba%C3%A2%2C%20Casablanca%2020250!5e0!3m2!1sen!2sma!4v1618953908615!5m2!1sen!2sma" width="100%" height="380" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="form contact-form">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </main>

        </div>
     );
}

export default Body

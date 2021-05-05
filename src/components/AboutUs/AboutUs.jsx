import ilyas from '../../assets/portraits/ilyas.jpg';
import seb from '../../assets/portraits/seb.jpg';
import david from '../../assets/portraits/david.jpg';
import nico from '../../assets/portraits/nico.jpg';
import './aboutUs.css';

const AboutUs = () => (
  <div className="wrapper">
    <h1>Meet The Martians</h1>
    <div className="team">
      <div className="team_member">
        <div className="team_img">
          <img src={ilyas} alt="ilyas" />
        </div>
        <h3>Ilyas Hara</h3>
        <p className="role">WCS Developer</p>
        <p>
          Ancien ingénieur aéronautique, attiré par le développement web, Ilyas
          s&apos;est lancé dans le monde de la Wild pour faire du
          &apos;Wild&apos; dans le domaine. Prêt à tout défier, il est
          inarrêtable..
        </p>
      </div>
      <div className="team_member">
        <div className="team_img">
          <img src={seb} alt="Team_image" />
        </div>
        <h3>Sébastien François</h3>
        <p className="role">WCS Developer</p>
        <p>
          Ancienne Logisticienne aéronautique, Gwénaëlle veut devenir
          dévellopeuse web car c&apos;est un métier d&apos;avenir, elle a hâte
          de vous faire découvrir tous ce qu&apos;elle c&apos;est faire.
        </p>
      </div>
      <div className="team_member">
        <div className="team_img">
          <img src={david} alt="Team_image" />
        </div>
        <h3>David Bourrel</h3>
        <p className="role">WCS Developer</p>
        <p>
          Ancienne Logisticienne aéronautique, Gwénaëlle veut devenir
          dévellopeuse web car c&apos;est un métier d&apos;avenir, elle a hâte
          de vous faire découvrir tous ce qu&apos;elle c&apos;est faire.
        </p>
      </div>
      <div className="team_member">
        <div className="team_img">
          <img src={nico} alt="Team_image" />
        </div>
        <h3>Nicolas Concina</h3>
        <p className="role">WCS Developer</p>
        <p>
          Ancienne Logisticienne aéronautique, Gwénaëlle veut devenir
          dévellopeuse web car c&apos;est un métier d&apos;avenir, elle a hâte
          de vous faire découvrir tous ce qu&apos;elle c&apos;est faire.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;

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
        <p className="role">Junior Developer</p>
        <p>
          Former aeronautical engineer, attracted by web development, Ilyas
          embarked on the world of the Wild to go &apos;Wild&apos; in the field.
          Ready to challenge anything, he is unstoppable.
        </p>
      </div>
      <div className="team_member">
        <div className="team_img">
          <img src={seb} alt="Team_image" />
        </div>
        <h3>Sébastien François</h3>
        <p className="role">Junior Developer</p>
        <p>
          Former Seaman, Sebastien has the taste of adventure and challenge.
          After some time sailing around, he decided to come back on land and
          become a wilder. Very communicative, he likes working among a team.
          All hands on deck!
        </p>
      </div>
      <div className="team_member">
        <div className="team_img">
          <img src={david} alt="Team_image" />
        </div>
        <h3>David Bourrel</h3>
        <p className="role">Junior Developer</p>
        <p>
          Interested by web development since a couple of years, David decided
          to jump into it and join the wilders! To create, develop and help each
          other are his motivations !
        </p>
      </div>
      <div className="team_member">
        <div className="team_img">
          <img src={nico} alt="Team_image" />
        </div>
        <h3>Nicolas Concina</h3>
        <p className="role">Junior Developer</p>
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

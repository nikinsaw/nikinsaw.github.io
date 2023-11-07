import HomeScreen from './containers/HomeScreen';
import ProjectsScreen from './containers/ProjectsScreen';
import StackScreen from './containers/StackScreen';
import AlbumScreen from './containers/AlbumScreen';
import ProfileScreen from './containers/ProfileScreen';
import ContactScreen from './containers/ContactScreen';


const nav = [
  { name: "homeIcon", title: "About", screenUrl: "/", component: <HomeScreen /> },
  { name: "projectsIcon", title: "Projects", screenUrl: "/projects/petzzing", component: <ProjectsScreen /> },
  { name: "stackIcons", title: "Stack", screenUrl: "/stack", component: <StackScreen /> },
  { name: "albumIcon", title: "Interests", screenUrl: "/other-intersts", component: <AlbumScreen /> },
  { name: "profileIcon", title: "Profile", screenUrl: "/profile", component: <ProfileScreen /> },
  { name: "contactIcon", title: "Contact", screenUrl: "/contact", component: <ContactScreen /> },
]

const socialIconNames = [
  { name: "githubIcon", link: 'https://github.com/nikinsaw' },
  { name: "linkedinIcon", link: 'https://www.linkedin.com/in/nikitansawant/' },
  { name: "twitterIcon", link: 'https://twitter.com/nikinsaw' },
  { name: "instagramIcon", link: 'https://www.instagram.com/nikinsaw/' },
  { name: "youtubeIcon", link: 'https://www.youtube.com/@nikinsaw' },
  { name: "facebookIcon", link: 'https://www.facebook.com/nikinsaw' },
]

const navBarIcons = {
  // Dark BG Dark Text
  // nav bar icons
  homeIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-home-50.png'),
  albumIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-albums-50.png'),
  projectsIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-collage-50.png'),
  profileIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-lady-50.png'),
  contactIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-envelope-50.png'),
  stackIconsDarkBGInactive50: require('./assets/icons/icons_70/icons8-sheets-50.png'),

  // Dark BG Light Text
  homeIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-home-50.png'),
  albumIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-albums-50.png'),
  projectsIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-collage-50.png'),
  profileIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-lady-50.png'),
  contactIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-envelope-50.png'),
  stackIconsDarkBGActive50: require('./assets/icons/icons_A0/icons8-sheets-50.png'),
}

const socialIcons = {
  // Dark BG Dark Text
  // social icons
  githubIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-github-50.png'),
  linkedinIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-linkedin-circled-50.png'),
  twitterIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-twitterx-50.png'),
  instagramIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-instagram-50.png'),
  youtubeIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-youtube-50.png'),
  facebookIconDarkBGInactive50: require('./assets/icons/icons_70/icons8-facebook-50.png'),

  //Dark BG Light Text
  githubIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-github-50.png'),
  linkedinIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-linkedin-circled-50.png'),
  twitterIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-twitterx-50.png'),
  instagramIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-instagram-50.png'),
  youtubeIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-youtube-50.png'),
  facebookIconDarkBGActive50: require('./assets/icons/icons_A0/icons8-facebook-50.png'),
}


const work = [
  {
    name: 'Petzzing',
    tagline: 'Rebuilding Petzzing App',
    slug: 'petzzing',
    link: 'https://petzzing.com/',
    image: require('./assets/work/petzzing.png'),
    description: <>
      <p>In the bustling heart of the pet care industry, our Petzzing team embarked on a transformative journey to revitalize our app. Driven by a deep understanding of pet parents' needs and a commitment to providing exceptional pet care, our app underwent a remarkable metamorphosis.</p>
      <br />
      <p>The seeds of our app's revamp were sown in the realization that pet ownership was evolving. Pet parents sought a holistic approach, blending product purchases, service bookings, and community engagement. Recognizing this shift, our Petzzing team envisioned an app that would not only meet these needs but also exceed expectations.</p>
      <br />
      <p>Guided by our commitment to innovation, our Petzzing team reimagined our app's interface and user experience. Analyzing user feedback, we identified areas for improvement, shaping the app to be intuitive, user-friendly, and visually appealing.</p>
      <br />
      <p>Understanding busy pet parents' needs, we transformed our in-app shopping into a hassle-free experience. High-quality pet products, from food to toys, were a few taps away. Detailed descriptions and reviews made finding the perfect items easy.</p>
      <br />
      <p>We integrated a seamless service booking platform, allowing users to find trustworthy pet service providers effortlessly. Grooming, training, boarding, and online consultations became accessible with a few clicks.</p>
      <br />
      <p>Pet ownership was about connection. We introduced a vibrant forum where pet parents could share stories and tips, fostering camaraderie among pet enthusiasts.</p>
      <br />
      <p>To reward our loyal users, we revamped our loyalty program. Earning points for interactions, purchases, and referrals, users could redeem them for discounts on products and services, enhancing the app's value.</p>
      <br />
      <p>With anticipation, our Petzzing team unveiled the revitalized app, met with praise for its intuitive interface and commitment to pet welfare. It became an indispensable tool for pet care enthusiasts worldwide.</p>
      <br />
      <p>Our Petzzing app's revamp was a testament to our team's dedication. Committed to constant improvement, we sought feedback and identified opportunities, ensuring the app's evolution and fostering a community of passionate pet lovers.</p>
    </>
  },

  {
    name: 'Petzzing Partner',
    tagline: 'New partner app for Petzzing',
    slug: 'petzzing-partner',
    link: 'https://petzzing.com/',
    image: require('./assets/work/petzzing-partner.png'),
    description: <>
      <p>In the dynamic world of pet care, Petzzing, a leading platform connecting pet parents with essential services, identified the need for a specialized app to enhance the experience of its service providers and veterinary doctors. Thus, the journey to create the Petzzing Partner App unfolded.</p>
      <br />
      <p>The genesis of the app lay in understanding the challenges faced by pet care professionals. Through extensive research, including surveys, interviews, and focus groups, the Petzzing team gained valuable insights into the pain points and aspirations of these individuals. They discovered a universal desire for improved communication with clients, simplified booking management, and access to meaningful earning statistics.</p>      <br />
      <br />
      <p>Armed with this understanding, the Petzzing team embarked on designing an app tailored to address these needs and empower service providers to manage their businesses with efficiency and ease. The app would provide them with the ability to accept or reject bookings, view their schedules, access past bookings, and track their earnings.</p>      <br />
      <br />
      <p>Recognizing the unique requirements of veterinary doctors, the app incorporated features that enabled them to adjust their weekly or daily schedules, set available slots for appointments, and manage their patient records. This would streamline their workflow and enhance patient care.</p>      <br />
      <br />
      <p>Simplifying the onboarding process for service providers was a key priority. The app allows them to effortlessly enter information about their boarding places, add pictures for reference, and set their service rates. This would provide pet parents with transparent and detailed information about each provider.</p>      <br />
      <br />
      <p>Throughout the development process, the Petzzing team conducted rigorous testing and refinement, ensuring that the app met the highest standards of usability and functionality. They gathered feedback from a select group of beta testers, incorporating their suggestions into the final product.</p>      <br />
      <br />
      <p>With anticipation simmering, the Petzzing Partner App was launched, eagerly awaited by service providers and veterinary doctors alike. The app quickly gained popularity, transforming the way these professionals managed their businesses and interacted with clients. Petzzing had once again demonstrated its commitment to fostering a seamless and rewarding experience for all stakeholders in the pet care ecosystem.</p>
    </>
  },

  {
    name: 'Whiskey Shelf',
    tagline: 'Building the Whiskey Shelf App',
    slug: 'whiskey-shelf',
    link: 'https://petzzing.com/',
    image: require('./assets/work/whiskey-shelf.png'),
    description: <>
      <p>In the realm of spirits and technology, our team set out to create an innovative app, redefining how whiskey enthusiasts manage their collections. This app introduces a groundbreaking concept—an Infinity Bottle, allowing users to blend different whiskies, fostering creativity and exploration.</p>
      <br />
      <p>At its core, the app simplifies the tracking of extensive whiskey collections. Integrated barcode scanning facilitates easy additions, while a comprehensive database offers detailed descriptions and valuations, empowering users with knowledge and insights.</p>
      <br />
      <p>The Infinity Bottle feature adds a dynamic element to collections. Enthusiasts can contribute small quantities of each new whiskey, resulting in a continually evolving blend. This not only showcases the diversity of flavors but also encourages users to experiment and deepen their understanding of whiskies.</p>
      <br />
      <p>Throughout development, user feedback shaped the app's user-friendly interface and robust features. Whiskey Shelf's intuitive design resonated with users, establishing it as an essential tool for enthusiasts worldwide.</p>
      <br />
      <p>This app goes beyond organization; it encourages enthusiasts to explore the rich tapestry of whiskies. Novices and connoisseurs alike find a gateway to the diverse world of spirits. As popularity grows, the app becomes a focal point for global whiskey aficionados, fostering connections and celebrating the joy of discovery.</p>
      <br />
      <p>With its innovative approach and passionate community, the app stands as a testament to the evolving landscape of whiskey appreciation. Whiskey Shelf continues to inspire enthusiasts, shaping a vibrant and interconnected global whiskey community.</p>
    </>
  },
]


export { nav, work, navBarIcons, socialIcons, socialIconNames }
import HomeScreen from './containers/HomeScreen';
import ProjectsScreen from './containers/ProjectsScreen';
import StackScreen from './containers/StackScreen';
import AlbumScreen from './containers/AlbumScreen';
import ProfileScreen from './containers/ProfileScreen';
import ContactScreen from './containers/ContactScreen';


const nav = [
  { name: "homeIcon", title: "About", screenUrl: "/", component: <HomeScreen /> },
  { name: "projectsIcon", title: "Projects", screenUrl: "/projects", component: <ProjectsScreen /> },
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

export { nav, navBarIcons, socialIcons, socialIconNames }
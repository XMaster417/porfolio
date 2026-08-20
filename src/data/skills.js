import computerNetworkIcon from '../assets/icons/computer_network_icon.svg'
import mobileDevelopmentIcon from '../assets/icons/mobile_dev_icon.svg'
import softwareStackIcon from '../assets/icons/skills_icon.svg'
import webDevelopmentIcon from '../assets/icons/web_dev_icon.svg'

export const skillTabs = [
  {
    id: 'web',
    label: 'Web development',
    icon: webDevelopmentIcon,
  },
  {
    id: 'mobile',
    label: 'Mobile development',
    icon: mobileDevelopmentIcon,
  },
  {
    id: 'network',
    label: 'Computer network',
    icon: computerNetworkIcon,
  },
  {
    id: 'stack',
    label: 'Software stack',
    icon: softwareStackIcon,
  },
]

const skills = [
  { name: 'JavaScript', years: 3, tab: ['web', 'stack'] },
  { name: 'Node.js', years: 3, tab: ['web'] },
  { name: 'Express', years: 3, tab: ['web'] },
  { name: 'React', years: 1, tab: ['web'] },
  { name: 'Prisma', years: 1, tab: ['web'] },
  { name: 'PostgreSQL', years: 1, tab: ['web'] },
  { name: 'Kotlin', years: 1, tab: ['mobile'] },
  { name: 'Android', years: 1, tab: ['mobile'] },
  { name: 'MariaDB', years: 1, tab: ['mobile'] },
  { name: 'ESP32', years: 2, tab: ['network'] },
  { name: 'Arduino', years: 2, tab: ['network'] },
  { name: 'C++', years: 3, tab: ['stack'] },
  { name: 'Python', years: 2, tab: ['stack'] },
  { name: 'C#', years: 2, tab: ['stack'] },
  { name: 'Unity', years: 2, tab: ['stack'] },
  { name: 'CUDA', years: 1, tab: ['stack'] },
  { name: 'Flask', years: 2, tab: ['stack'] },
]

export default skills

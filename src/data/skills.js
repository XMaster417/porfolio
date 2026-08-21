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

import jsIcon from '../assets/images/js_logo.webp'
import nodeIcon from '../assets/images/node_logo.webp'
import expressIcon from '../assets/images/express_logo.webp'
import reactIcon from '../assets/images/react_logo.webp'
import tsIcon from '../assets/images/ts_logo.webp'
import jestIcon from '../assets/images/jest_logo.webp'
import prismaIcon from '../assets/images/prisma_logo.webp'
import postgreSQLIcon from '../assets/images/postgre_logo.webp'
import kotlinIcon from '../assets/images/kotlin_logo.webp'
import mariaDbIcon from '../assets/images/mariadb_logo.webp'
import arduinoIcon from '../assets/images/arduino_logo.webp'
import cppIcon from '../assets/images/cpp_logo.webp'
import pythonIcon from '../assets/images/py_logo.webp'
import csharpIcon from '../assets/images/c_sharp_logo.webp'
import unityIcon from '../assets/images/unity_logo.webp'
import cudaIcon from '../assets/images/nvidia_logo.webp'
import flaskIcon from '../assets/images/flask_logo.png'
import cptIcon from '../assets/images/cpt_logo.webp'

const skills = [
  { name: 'JavaScript', years: 3, tab: ['web'], icon:  jsIcon},
  { name: 'Node.js', years: 3, tab: ['web'], icon: nodeIcon },
  { name: 'Express', years: 3, tab: ['web'], icon: expressIcon },
  { name: 'React', years: 1, tab: ['web'], icon: reactIcon },
  { name: 'TypeScript', years: 1, tab: ['web'], icon: tsIcon },
  { name: 'Jest', years: 1, tab: ['web'], icon: jestIcon },
  { name: 'Prisma', years: 1, tab: ['web'], icon: prismaIcon },
  { name: 'PostgreSQL', years: 1, tab: ['web'], icon: postgreSQLIcon },
  { name: 'Kotlin', years: 1, tab: ['mobile'], icon: kotlinIcon },
  { name: 'MariaDB', years: 2, tab: ['mobile', 'web'], icon: mariaDbIcon },
  { name: 'PostgreSQL', years: 1, tab: ['mobile', 'web'], icon: postgreSQLIcon },
  { name: 'Arduino', years: 1, tab: ['network'], icon: arduinoIcon },
  { name: 'C++', years: 3, tab: ['stack'], icon: cppIcon },
  { name: 'Python', years: 3, tab: ['stack'], icon: pythonIcon },
  { name: 'C#', years: 1, tab: ['stack'], icon: csharpIcon },
  { name: 'Unity', years: 1, tab: ['stack'], icon: unityIcon },
  { name: 'CUDA', years: 1, tab: ['stack'], icon: cudaIcon },
  { name: 'Flask', years: 2, tab: ['stack'], icon: flaskIcon },
  { name: 'Cisco Packet Tracer', years: 1, tab: ['network'], icon: cptIcon },
]

export default skills

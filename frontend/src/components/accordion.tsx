import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNode, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';



interface AccordionProps {
  activeCategory: string | null
  setActiveCategory: React.Dispatch<React.SetStateAction<null | string>>
}
const Accordion: FC<AccordionProps> = ({activeCategory, setActiveCategory}) => {
  
  return (
    <Box sx={{ height: '100vh', maxWidth: 200, overflowWrap: 'break-word', bgcolor: 'background.paper', boxShadow: 1}}>
      <nav aria-label='main sidebar'>
        <List>
          <MenuItem text = "React" icon = {faReact} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          <MenuItem text="Python/Django" icon={faPython} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
          <MenuItem text="Node.js" icon={faNode} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
          <MenuItem text="Ruby/Rails" icon={faGem} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </List>
      </nav>

    </Box>
  )

}
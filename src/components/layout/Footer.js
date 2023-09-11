import React from 'react'
import classes from './Footer.module.css';
import { ReactComponent as IconGithub } from '../../assets/github.svg'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Copyright by<a href='https://github.com/dougdevs' target='_blank' rel='noreferrer'> Douglas Terleski <IconGithub /></a></p>
    </footer>
  )
}

export default Footer
import './Links.css'

import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'primereact/button'
import linksConfig from '../config/links.json'

function Links({ links }) {
  const colors = {
    link: '#1a1817',
    android: '#3DDC84',
    apple: '#000000',
    discord: '#5865F2',
    facebook: '#1877F2',
    github: '#171515',
    instagram: '#833AB4',
    linkedin: '#0077b5',
    microsoft: '#5E5E5E',
    paypal: '#00457C',
    slack: '#4A154B',
    twitter: '#00ACEE',
    vimeo: '#1AB7EA',
    youtube: '#FF0000',
  }

  function MouseOver(e, color) {
    e.target.style.background = color
  }

  function MouseOut(e) {
    e.target.style.background = ''
  }

  return (
    <section className="p-d-flex p-jc-center p-mb-4">
      <div className="p-d-flex p-flex-column w-70">
        {links
          .filter((link) => Object.keys(colors).includes(link.icon))
          .map((link, index) => (
            <Button
              key={`link.url_${index}`}
              onMouseOver={(e) => MouseOver(e, colors[link.icon])}
              onMouseOut={MouseOut}
              className={`p-p-3 p-my-2 p-button-outlined ${link.icon}`}
              style={{ color: colors[link.icon] }}
              role="link"
              onClick={() => window.open(link.url, '_blank')}
            >
              <i className={`pi pi-${link.icon} p-px-2`}></i>
              <span className="p-px-3">{link.name}</span>
            </Button>
          ))}
        {links
          .filter((link) => !Object.keys(colors).includes(link.icon))
          .map((link, index) => (
            <Button
              key={`link.url_${index}`}
              onMouseOver={(e) => MouseOver(e, colors[link.icon])}
              onMouseOut={MouseOut}
              className={`p-p-3 p-my-2 p-button-outlined ${link.icon}`}
              style={{ color: colors[link.icon] }}
              role="link"
              onClick={() => window.open(link.url, '_blank')}
            >
              <i className={`pi pi-${link.icon} p-px-2`}></i>
              <span className="p-px-3">{link.name}</span>
            </Button>
          ))}
      </div>
    </section>
  )
}

Links.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Links

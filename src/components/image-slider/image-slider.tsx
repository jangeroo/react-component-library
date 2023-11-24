'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import classes from './image-slider.module.css'
import { css } from '@components/helpers'

type Image = {
  src: string;
  alt: string;
}

type Props = {
  images: Image[]
}

export default function ImageSlider ({ images }: Props) {
  const [focusedIndex, setFocusedIndex] = useState(0)

  const showPrevImage = () => {
    setFocusedIndex(prev => (prev - 1 + images.length) % images.length)
  }

  const showNextImage = () => {
    setFocusedIndex(prev => (prev + 1) % images.length)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.images}>
        {images.map((image, i) => (
          <Image
            key={image.src}
            className={classes['slider-image']}
            src={images[i].src}
            alt={images[i].alt}
            width={10000}
            height={10000}
            style={{ translate: `${-100 * focusedIndex}%` }}
          />
        ))}
      </div>

      <button
        className={css(classes, ['slider-button', 'left'])}
        onClick={showPrevImage}
      >
        <div>👈</div>
      </button>
      <button
        className={css(classes, ['slider-button', 'right'])}
        onClick={showNextImage}
      >
        <div>👉</div>
      </button>

      <div>index: {focusedIndex}</div>
    </div>
  )
}

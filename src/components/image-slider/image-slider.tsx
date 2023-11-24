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
      <Image
        className={classes['slider-image']}
        src={images[focusedIndex].src}
        alt={images[focusedIndex].alt}
        width={10000}
        height={10000}
      />

      <button
        className={css(classes, ['slider-button', 'left'])}
        onClick={showPrevImage}
      >
        👈
      </button>
      <button
        className={css(classes, ['slider-button', 'right'])}
        onClick={showNextImage}
      >
        👉
      </button>

      <div>index: {focusedIndex}</div>
    </div>
  )
}

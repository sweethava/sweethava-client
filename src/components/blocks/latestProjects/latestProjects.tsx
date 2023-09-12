'use client'

import { ConfLatestProjects } from '@/config/projects'
import styles from './latestProjects.module.scss'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/components/ui/tag/tag'
import { EFieldSizes, EFieldStyles } from '@/types/fields'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import Button from '@/components/ui/button/button'
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineExternalLink } from 'react-icons/hi'
import { Navigation, Pagination } from 'swiper/modules'
import { ConfCVLink } from '@/config/general'
import GridLines from '@/components/general/gridLines/gridLines'
import AnimationScale from '@/components/animations/animationScale/animationScale'

const LatestProjects = () => {
    const prevBtn = useRef(null!)
    const nextBtn = useRef(null!)
    const [projects] = useState(ConfLatestProjects)

    return (
        <div className={styles.wrapper}>
            <div className={styles.controls}>
                <Button
                    icon={<HiOutlineChevronLeft />}
                    fieldStyle={EFieldStyles.OUTLINE}
                    square
                    ref={prevBtn}
                    blur
                />
                <Button
                    icon={<HiOutlineChevronRight />}
                    fieldStyle={EFieldStyles.OUTLINE}
                    square
                    ref={nextBtn}
                    blur
                />
            </div>
            <Swiper
                className={styles.slider}
                slidesPerView={1}
                spaceBetween={20}
                modules={[Navigation, Pagination]}
                pagination={{
                    clickable: true,
                    bulletClass: styles.dot,
                    bulletActiveClass: styles.active,
                    horizontalClass: styles.pagination,
                }}
                navigation={{
                    prevEl: prevBtn.current,
                    nextEl: nextBtn.current,
                }}
                speed={500}
                onBeforeInit={(swiper: SwiperClass) => {
                    if (swiper.params.navigation) {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevBtn.current
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextBtn.current
                    }
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    },
                }}
                loop
            >
                {
                    projects.map((item, index) => {
                        const { tags, title, text, image, link } = item

                        return (
                            <SwiperSlide className={styles.slide} key={index}>
                                <AnimationScale>
                                    <Link href={link} target='_blank' className={styles.item} key={index}>
                                        <div className={styles.image}>
                                            <Image src={image.src} fill alt={title} />
                                        </div>
                                        <div className={styles.tags}>
                                            <div className={styles.line}>
                                                {
                                                    tags.map((tag, index) => {
                                                        return <Tag key={index} size={EFieldSizes.SMALL} fieldStyle={EFieldStyles.GREY}>{tag}</Tag>
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className={styles.content}>
                                            <div className={styles.title}>{title}</div>
                                            <div className={styles.text}>{text}</div>
                                        </div>
                                    </Link>
                                </AnimationScale>
                            </SwiperSlide>
                        )
                    })
                }

                <SwiperSlide className={styles.slide}>
                    <AnimationScale>
                        <Link href={ConfCVLink} target='_blank' className={styles.other}>
                            <div className={styles.grid}>
                                <GridLines />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.icon}>
                                    <HiOutlineExternalLink />
                                </div>
                                <div className={styles.title}>Other Projects</div>
                                <div className={styles.text}>My resume with more details</div>
                            </div>
                        </Link>
                    </AnimationScale>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default LatestProjects
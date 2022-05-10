import { useEffect } from 'react'
import Head from 'next/head'
import logo from '../public/images/logo-m.svg'
import harmburgerIcon from '../public/images/hamburger-icon.svg'
// import heroImageMobile from '../public/images/hero-img-mobile.png'
// import heroImageDesktop from '../public/images/hero-img-desktop.png'

import companyBoom from '../public/images/1.svg';
import companyQrco from '../public/images/2.svg';
import companyBlimp from '../public/images/3.svg';
import companyDroplet from '../public/images/5.svg';
import nftThumbnail from '../public/images/nft-thumbnail.png'
import girlWithGreenShirt from '../public/images/girl-with-green-shirt.png'
import fbIcon from '../public/images/facebook.svg';
import twitterIcon from '../public/images/twitter.svg';
import igIcon from '../public/images/instagram.svg';
import tiktokIcon from '../public/images/tiktok.svg';

import Image from 'next/image';

const HomePage = () => {
  useEffect(() => {
    if (document) {
      const sections = document.querySelectorAll('.section')
      const scrollIntersection = new IntersectionObserver((entries, scrollObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            const animation = entry.target.getAttribute('data-animation')
            entry.target.classList.add(animation)
            scrollObserver.unobserve(entry.target)
          }
        })

      }, { threshold: 1 })
      sections.forEach(section => {
        scrollIntersection.observe(section)
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>NFT Landing Page | Sample Design</title>
        <link rel="preload" as="image" href="/images/hero-img-mobile.png" />
        <link rel="preload" as="image" href="/images/hero-img-desktop.png" />
        <link rel="preload" as="font" href="/fonts/Inter-Regular.ttf" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Inter-Black.ttf" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Inter-Medium.ttf" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Inter-Bold.ttf" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/Inter-SemiBold.ttf" crossOrigin="anonymous" />
      </Head>
      <div className="font-inter relative">
        <nav className="desktop:px-[5rem] desktop:flex px-[2rem] pt-[2rem] flex items-center justify-between">
          <div className="h-[3rem]">
            <Image alt="nft landing page logo" src={logo} />
          </div>
          <div className="desktop:animate-onload-title desktop:flex desktop:flex-row hidden">
            <p className="font-inter text-[1.25rem] leading-[1rem] text-dark">Features</p>
            <p className="ml-[1.75rem] font-inter text-[1.25rem] leading-[1rem] text-dark">About</p>
            <p className="ml-[1.75rem] font-inter text-[1.25rem] leading-[1rem] text-dark">Launch</p>
            <p className="ml-[1.75rem] font-inter text-[1.25rem] leading-[1rem] text-pink">Sign Up</p>
          </div>
          <div className="desktop:hidden flex">
            <Image alt="mobile menu" src={harmburgerIcon} />
          </div>
        </nav>
        <div className="animate-onload-section desktop:hidden absolute top-[6.875rem] right-0 h-[17.375rem] w-[11.125rem]">
          <img alt="robot with 2 eyes" src={`/images/hero-img-mobile.png`} />
        </div>
        <div className="animate-onload-section desktop:block desktop:right-[16%] hidden absolute top-[13.375rem] right-0 h-[32.4375rem] w-[20.5rem]">
          <img alt="robot with 2 eyes" src={`/images/hero-img-desktop.png`} />
        </div>
        <section className="animate-onload-title desktop:pl-[5rem] desktop:pr-[50%] desktop:pb-[12.5rem] desktop:pt-[11.375rem] relative px-[2rem] pt-[5rem] pr-[30%] pb-[5rem] desktop:min-h-[calc(100vh_-_5rem)]">
          <h2 className="desktop:text-[1.25rem] desktop:pb-[1rem] pb-[1.5rem] font-inter-bold text-pink">LAUNCHING SOON</h2>
          <h1 class="desktop:text-[6rem] desktop:pb-[2rem] desktop:leading-[7.25rem] text-[3rem] font-black pb-[1.5rem] font-inter-black leading-[3.625rem]">An NFT like no other</h1>
          <h3 className="desktop:pb-[2.5625rem] leading-[1.5rem] pb-[3rem]">Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live.</h3>
          <button className="font-inter-semi-bold px-[3.5rem] py-[1.4375rem] bg-pink rounded-full text-white">Sign Up</button>
        </section>
        <section data-animation="animate-onload-section" className="section desktop:mx-[5rem] desktop:rounded-[1rem] desktop:px-[4rem] desktop:pt-[9.625rem] desktop:min-h-[20rem] px-[2rem] min-h-[20.375rem] pt-[7.625rem] text-black bg-gradient-to-r from-pink via-red via-orange to-neon-green">
          <h2 className="desktop:mb-[1.5rem] font-inter-medium text-[2.5rem] leading-[3rem] mb-[1rem]">Free NFT for early birds</h2>
          <h3 className="leading-[1.5rem] text-[1.25rem]">Sign up today and you’ll get a free NFT when we launch.</h3>
        </section>
        <section data-animation="animate-onload-title" className="section desktop:mx-[5rem] desktop:py-[7.5rem] desktop:grid-cols-4 pt-[3.5rem] pb-[3.5rem] px-[2rem] grid grid-cols-2 auto-cols-fr grid-flow-column gap-[1.6875rem]">
          <Image alt="Boom company logo" src={companyBoom} />
          <Image alt="QRCO company logo" src={companyQrco} />
          <Image alt="Blimp company logo" src={companyBlimp} />
          <Image alt="Droplet company logo" src={companyDroplet} />
        </section>
        <section data-animation="animate-onload-section" className="section  desktop:mx-[5rem] mx-[2rem]">
          <h2 className="desktop:mb-[1.5rem] font-inter-medium text-[2.5rem] leading-[3rem] mb-[1rem] ">
            LE Super Rare Auction
          </h2>
          <h3 className="leading-[1.5rem] text-[1.25rem]">
            We have released four limited edition NFTs early which can be bid on via OpenSea.
          </h3>
        </section>
        <section data-animation="animate-onload-title" className="section desktop:pl-[5rem] desktop:pt-[3.5rem] desktop:pb-[5rem] pl-[2rem] pt-[2.5rem] pb-[5.75rem] overflow-x-auto">
          <div className="grid grid-flow-col auto-cols-[minmax(18.125rem,1fr)] grid-cols-[repeat(auto-fill,minmax(18.125rem,1fr))] gap-[1.6875rem]">
            <div className="">
              <div className="relative h-[17.375rem] w-[100%] ">
                <Image alt="nft product thumbnail" className="rounded-t-[1rem]" src={nftThumbnail} layout="fill" objectFit='cover' />
              </div>
              <div className="bg-[#EEEEEE] rounded-b-[1rem] p-[1.5rem]">
                <div className="flex items-center justify-between mb-[0.75rem]">
                  <span className="text-[#FF8139] font-inter-medium text-[0.75rem] leading-[1rem]">GLOOP SERIES</span>
                  <span className="text-dark-400 font-inter-medium text-[0.75rem] leading-[1rem]">TOP BID</span>
                </div>
                <div className="text-dark-400 flex items-center justify-between mb-[0.75rem]">
                  <p className="text-black font-inter-medium text-[1.25rem] leading-[1rem]">Purple Man</p>
                  <p className="text-black font-inter-medium text-[1.25rem] leading-[1rem]">2.99 ETH</p>
                </div>
                <div className="flex items-center justify-between mb-[0.75rem]">
                  <p className="text-dark-400 font-inter text-[1.125rem] leading-[1rem]">#12983</p>
                  <p className="text-dark-400 font-inter text-[1.125rem] leading-[1rem]">1 day left</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-[17.375rem] w-[100%]">
                <Image alt="nft product thumbnail" className="rounded-t-[1rem]" src={nftThumbnail} layout="fill" objectFit='cover' />
              </div>
              <div className="bg-[#EEEEEE] rounded-b-[1rem] p-[1.5rem]">
                <div className="flex items-center justify-between mb-[0.75rem]">
                  <span className="text-[#FF8139] font-inter-medium text-[0.75rem] leading-[1rem]">GLOOP SERIES</span>
                  <span className="text-dark-400 font-inter-medium text-[0.75rem] leading-[1rem]">TOP BID</span>
                </div>
                <div className="text-dark-400 flex items-center justify-between mb-[0.75rem]">
                  <p className="text-black font-inter-medium text-[1.25rem] leading-[1rem]">Purple Man</p>
                  <p className="text-black font-inter-medium text-[1.25rem] leading-[1rem]">2.99 ETH</p>
                </div>
                <div className="flex items-center justify-between mb-[0.75rem]">
                  <p className="text-dark-400 font-inter text-[1.125rem] leading-[1rem]">#12983</p>
                  <p className="text-dark-400 font-inter text-[1.125rem] leading-[1rem]">1 day left</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-[17.375rem] w-[100%]">
                <Image alt="nft product thumbnail" className="rounded-t-[1rem]" src={nftThumbnail} layout="fill" objectFit='cover' />
              </div>
              <div className="bg-[#EEEEEE] rounded-b-[1rem] p-[1.5rem]">
                <div className="flex items-center justify-between mb-[0.75rem]">
                  <span className="text-[#FF8139] font-inter-medium text-[0.75rem] leading-[1rem]">GLOOP SERIES</span>
                  <span className="text-dark-400 font-inter-medium text-[0.75rem] leading-[1rem]">TOP BID</span>
                </div>
                <div className="text-dark-400 flex items-center justify-between mb-[0.75rem]">
                  <p className="text-black font-inter-medium text-[1.25rem] leading-[1rem]">Purple Man</p>
                  <p className="text-black font-inter-medium text-[1.25rem] leading-[1rem]">2.99 ETH</p>
                </div>
                <div className="flex items-center justify-between mb-[0.75rem]">
                  <p className="text-dark-400 font-inter text-[1.125rem] leading-[1rem]">#12983</p>
                  <p className="text-dark-400 font-inter text-[1.125rem] leading-[1rem]">1 day left</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="desktop:mx-[5rem] desktop:pt-[5rem] relative border-y-2 border-[#EEEEEE] pb-[5rem]">
          <div data-animation="animate-onload-section" className="section desktop:right-[20%] absolute bottom-0 right-0 h-[29.1875rem]">
            <Image alt="girl with green shirt" src={girlWithGreenShirt} />
          </div>
          <div data-animation="animate-onload-title" className="section desktop: desktop:mx-0 desktop:max-w-[50%] relative mx-[2rem] max-w-[50%] pt-[5.75rem]">
            <h2 className="pb-[1.5rem] font-inter-bold text-pink">LAUNCHING SOON</h2>
            <h1 class="desktop:text-[3.5rem] text-[3rem] font-black pb-[1.5rem] font-inter-black leading-[3.625rem]">An NFT like no other</h1>
            <h3 className="desktop:text-[1.25rem] leading-[1.5rem] pb-[3rem]">Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live.</h3>
            <button className="font-inter-semi-bold px-[3.5rem] py-[1.4375rem] bg-pink rounded-full text-white">Sign Up</button>
          </div>
        </section>
        <section data-animation="animate-onload-title" className="section desktop:flex desktop:justify-between desktop:mx-[5rem] pt-[4rem] mx-[2rem]">
          <div className="desktop:w-[40%] w-full">
            <div className="h-[3rem]">
              <Image alt="nft landing page logo" src={logo} />
            </div>
            <p className="mt-[1.875rem] font-inter text-[1.25rem] leading-[1rem] text-dark">Exclusive NFT Collection</p>
            <div className="mt-[2rem] flex desktop:flex-row desktop:flex-column">
              <div >
                <Image alt="fb icon logo" src={fbIcon} />
              </div>
              <div className="ml-[1rem]">
                <Image alt="twitter icon logo" src={twitterIcon} />
              </div>
              <div className="ml-[1rem]">
                <Image alt="instagram icon logo" src={igIcon} />
              </div>
              <div className="ml-[1rem]">
                <Image alt="tiktok icon logo" src={tiktokIcon} />
              </div>
            </div>
          </div>
          <div data-animation="animate-onload-title" className="section desktop:grid-cols-4 desktop:mt-0 desktop:grow mt-[1.5rem] max-w-[80%] grid grid-cols-2">
            <div className="desktop:mt-0 mt-[2.5rem]">
              <p className="mb-[1.75rem] font-inter-bold text-[1rem] text-dark leading-[1.1875rem] uppercase">ABOUT</p>
              <p className="font-inter text-[1.25rem] leading-[1rem] text-dark mb-[1.25rem]">About</p>
              <p className="font-inter text-[1.25rem] leading-[1rem] text-dark mb-[1.25rem]">Terms</p>
              <p className="font-inter text-[1.25rem] leading-[1rem] text-dark mb-[1.25rem]">Legal</p>
            </div>
            <div className="desktop:mt-0 mt-[2.5rem]">
              <p className="mb-[1.75rem] font-inter-bold text-[1rem] text-dark leading-[1.1875rem] uppercase">NFT</p>
              <p className="font-inter text-[1.25rem] leading-[1rem] text-dark mb-[1.25rem]">OpenSea</p>
              <p className="font-inter text-[1.25rem] leading-[1rem] text-dark mb-[1.25rem]">Maker</p>
              <p className="font-inter text-[1.25rem] leading-[1rem] text-dark mb-[1.25rem]">Learn</p>
            </div>
            <div className="desktop:mt-0 mt-[2.5rem]">
              <p className="mb-[1.75rem] font-inter-bold text-[1rem] text-dark leading-[1.1875rem] uppercase">CONTACT</p>
              <p className="font-inter text-[1.25rem] leading-[1rem] text-dark mb-[1.25rem]">Press</p>
              <p className="font-inter text-[1.25rem] leading-[1rem] text-dark mb-[1.25rem]">Support</p>
            </div>
            <div className="desktop:mt-0 mt-[2.5rem]">
              <p className="mb-[1.75rem] font-inter-bold text-[1rem] text-dark leading-[1.1875rem] uppercase">SOCIAL</p>
              <p className="font-inter text-[1.25rem] leading-[1rem] text-dark mb-[1.25rem]">Twitter</p>
              <p className="font-inter text-[1.25rem] leading-[1rem] text-dark mb-[1.25rem]">Instagram</p>
            </div>
          </div>
        </section>
        <p data-animation="animate-onload-title" className="section desktop:mx-[5rem] desktop:mt-[5rem] mx-[2rem] mt-[4rem] mb-[6.5625rem] font-inter text-[1.25rem] leading-[1rem] text-dark-200">© Copyright 2022 NFTlanding</p>
      </div>
    </>
  )
}

export default HomePage;
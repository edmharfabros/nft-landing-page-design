import logo from '../public/images/logo-m.svg'
import harmburgerIcon from '../public/images/hamburger-icon.svg'
import HeroImg from '../public/images/hero-img.png'

import companyBoom from '../public/images/1.svg';
import companyQrco from '../public/images/2.svg';
import companyBlimp from '../public/images/3.svg';
import companyDroplet from '../public/images/5.svg';
import nftThumbnail from '../public/images/nft-thumbnail.png'

import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="font-inter relative">
      <nav className="mx-[2rem] my-[2rem] flex items-center justify-between">
        <div className="h-[3rem]">
          <Image src={logo} />
        </div>
        <Image src={harmburgerIcon} />
      </nav>
      <div className="absolute top-[6.875rem] right-0 h-[17.375rem]">
        <Image src={HeroImg} />
      </div>
      <div className="relative mx-[2rem] mt-[5rem] max-w-[60%] pb-[5rem]">
        <p className="pb-[1.5rem] pt-[3rem] font-inter-bold">LAUNCHING SOON</p>
        <h1 class="text-[3rem] font-black pb-[1.5rem] font-inter-black leading-[3.625rem]">An NFT like no other</h1>
        <p className="leading-[1.5rem] pb-[3rem]">Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live.</p>
        <button className="font-inter-semi-bold px-[3.5rem] py-[1.4375rem] border-black rounded-full border-4">Sign Up</button>
      </div>
      <div className="px-[2rem] min-h-[20.375rem] bg-black w-[100%] pt-[7.625rem] text-white">
        <h1 className="font-inter-medium text-[2.5rem] leading-[3rem] mb-[1rem]">Free NFT for early birds</h1>
        <p className="leading-[1.5rem] text-[1.25rem]">Sign up today and you’ll get a free NFT when we launch.</p>
      </div>
      <div className="pt-[3.5rem] pb-[3.5rem] px-[2rem] grid grid-cols-2 auto-cols-fr grid-flow-column gap-[1.6875rem]">
        <Image src={companyBoom} />
        <Image src={companyQrco} />
        <Image src={companyBlimp} />
        <Image src={companyDroplet} />
      </div>
      <div className="px-[2rem]">
        <h1 className="font-inter-medium text-[2.5rem] leading-[3rem] mb-[1rem]">
          LE Super Rare Auction
        </h1>
        <p className="leading-[1.5rem] text-[1.25rem]">
          We have released four limited edition NFTs early which can be bid on via OpenSea.
        </p>
      </div>
      <div className="pl-[2rem] pt-[2.5rem] pb-[5.75rem] overflow-x-auto">
        <div className="grid grid-flow-col auto-cols-[minmax(18.125rem,1fr)] grid-cols-[repeat(auto-fill,minmax(18.125rem,1fr))] gap-[1.6875rem]">
          <div className="">
            <div className="relative h-[17.375rem] w-[100%] ">
              <Image className="rounded-t-[1rem]" src={nftThumbnail} layout="fill" objectFit='cover' />
            </div>
            <div className="bg-[#EEEEEE] rounded-b-[1rem] p-[1.5rem]">
              <div className="flex items-center justify-between mb-[0.75rem]">
                <span className="text-[#FF8139] font-inter-medium text-[0.75rem] leading-[1rem]">GLOOP SERIES</span>
                <span className="text-[#777777] font-inter-medium text-[0.75rem] leading-[1rem]">TOP BID</span>
              </div>
              <div className="text-[#777777] flex items-center justify-between mb-[0.75rem]">
                <h3 className="text-[#111111] font-inter-medium text-[1.25rem] leading-[1rem]">Purple Man</h3>
                <h3 className="text-[#111111] font-inter-medium text-[1.25rem] leading-[1rem]">2.99 ETH</h3>
              </div>
              <div className="flex items-center justify-between mb-[0.75rem]">
                <p className="text-[#777777] font-inter text-[1.125rem] leading-[1rem]">#12983</p>
                <p className="text-[#777777] font-inter text-[1.125rem] leading-[1rem]">1 day left</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative h-[17.375rem] w-[100%]">
              <Image className="rounded-t-[1rem]" src={nftThumbnail} layout="fill" objectFit='cover' />
            </div>
            <div className="bg-[#EEEEEE] rounded-b-[1rem] p-[1.5rem]">
              <div className="flex items-center justify-between mb-[0.75rem]">
                <span className="text-[#FF8139] font-inter-medium text-[0.75rem] leading-[1rem]">GLOOP SERIES</span>
                <span className="text-[#777777] font-inter-medium text-[0.75rem] leading-[1rem]">TOP BID</span>
              </div>
              <div className="text-[#777777] flex items-center justify-between mb-[0.75rem]">
                <h3 className="text-[#111111] font-inter-medium text-[1.25rem] leading-[1rem]">Purple Man</h3>
                <h3 className="text-[#111111] font-inter-medium text-[1.25rem] leading-[1rem]">2.99 ETH</h3>
              </div>
              <div className="flex items-center justify-between mb-[0.75rem]">
                <p className="text-[#777777] font-inter text-[1.125rem] leading-[1rem]">#12983</p>
                <p className="text-[#777777] font-inter text-[1.125rem] leading-[1rem]">1 day left</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative h-[17.375rem] w-[100%]">
              <Image className="rounded-t-[1rem]" src={nftThumbnail} layout="fill" objectFit='cover' />
            </div>
            <div className="bg-[#EEEEEE] rounded-b-[1rem] p-[1.5rem]">
              <div className="flex items-center justify-between mb-[0.75rem]">
                <span className="text-[#FF8139] font-inter-medium text-[0.75rem] leading-[1rem]">GLOOP SERIES</span>
                <span className="text-[#777777] font-inter-medium text-[0.75rem] leading-[1rem]">TOP BID</span>
              </div>
              <div className="text-[#777777] flex items-center justify-between mb-[0.75rem]">
                <h3 className="text-[#111111] font-inter-medium text-[1.25rem] leading-[1rem]">Purple Man</h3>
                <h3 className="text-[#111111] font-inter-medium text-[1.25rem] leading-[1rem]">2.99 ETH</h3>
              </div>
              <div className="flex items-center justify-between mb-[0.75rem]">
                <p className="text-[#777777] font-inter text-[1.125rem] leading-[1rem]">#12983</p>
                <p className="text-[#777777] font-inter text-[1.125rem] leading-[1rem]">1 day left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default HomePage;
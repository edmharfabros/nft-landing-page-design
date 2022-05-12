import React from 'react'
import Image from 'next/image';
import nftThumbnail from '../../public/images/nft-thumbnail.png'

const NFTCardComponent = () => {
  return (
    <div className="shadow-lg rounded-[1rem] hover:cursor-pointer">
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
  )
}

export default NFTCardComponent;
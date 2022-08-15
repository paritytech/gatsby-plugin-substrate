import { useState, useEffect } from 'react';

const githubBannersJSON = 'https://raw.githubusercontent.com/paritytech/substrate-website-banner/main/banners.json';

const useBanner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const response = await fetch(githubBannersJSON);
        const bannerInfo = await response.json();

        const activeBanners = bannerInfo.filter(banner => banner.active);
        setBanners(activeBanners.slice(0, 2));
      } catch (error) {
        setBanners([]);
      }
    };

    getBanners();
  }, []);

  return banners;
};

export { useBanner };

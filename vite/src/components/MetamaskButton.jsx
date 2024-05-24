import { ethers } from "ethers";

const MetamaskButton = ({ signer, setSigner }) => {
  const onClickMetamask = async () => {
    try {
      if (!window.ethereum) return;

      const provider = new ethers.BrowserProvider(window.ethereum);

      setSigner(await provider.getSigner());
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLogOut = () => {
    setSigner(null);
  };

  return signer ? (
    <div className="flex gap-8">
      <div className="box-style">
        안녕하세요, {signer.address.substring(0, 7)}...
        {signer.address.substring(signer.address.length - 5)}님
      </div>
      <button
        className="button-style border-red-300 hover:border-red-400"
        onClick={onClickLogOut}
      >
        로그아웃
      </button>
    </div>
  ) : (
    <button className="button-style" onClick={onClickMetamask}>
      🦊 메타마스크 로그인
    </button>
  );
};

export default MetamaskButton;

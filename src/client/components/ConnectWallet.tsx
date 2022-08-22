import React, { memo } from "react";
import { useStarknet, useConnectors, InjectedConnector } from "@starknet-react/core";
import UI_Frames from '../style/resources/front/Ui_Frames3.svg';

interface IConnect {
  close: any;
}

function Icon(props: any) {
    const { id } = props

    if (id === "argent-x")
      return (
        <svg
          fill="currentColor"
          viewBox="0 0 40 36"
          xmlns="http://www.w3.org/2000/svg"
          style={{width: "24px", marginRight: '12px'}}
        >
          <path d="M24.7582 -3.97364e-07H14.6238C14.2851 -3.97364e-07 14.0138 0.281178 14.0064 0.630683C13.8017 10.4549 8.82234 19.7792 0.251893 26.3837C-0.0202046 26.5933 -0.0821946 26.9872 0.116734 27.2709L6.04623 35.734C6.24796 36.022 6.64099 36.087 6.91766 35.8754C12.2765 31.7728 16.5869 26.8236 19.691 21.338C22.7951 26.8236 27.1057 31.7728 32.4646 35.8754C32.741 36.087 33.1341 36.022 33.3361 35.734L39.2656 27.2709C39.4642 26.9872 39.4022 26.5933 39.1304 26.3837C30.5597 19.7792 25.5804 10.4549 25.3759 0.630683C25.3685 0.281178 25.0969 -3.97364e-07 24.7582 -3.97364e-07Z" />
        </svg>
      );
  
    if (id === "braavos")
      return (
        <svg
          viewBox="0 0 100 100"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{width: "24px", marginRight: '12px'}}
        >
          <path d="M62.705 13.9116C62.8359 14.1333 62.6621 14.407 62.4039 14.407C57.1807 14.407 52.9348 18.5427 52.8351 23.6817C51.0465 23.3477 49.1933 23.3226 47.3626 23.6311C47.2361 18.5156 43.0009 14.407 37.7948 14.407C37.5365 14.407 37.3625 14.1331 37.4935 13.9112C40.0217 9.62809 44.7204 6.75 50.0991 6.75C55.4781 6.75 60.1769 9.62826 62.705 13.9116Z" />
          <path d="M78.7606 45.8718C80.2725 46.3297 81.7025 45.0055 81.1714 43.5222C76.4137 30.2334 61.3911 24.8039 50.0277 24.8039C38.6442 24.8039 23.2868 30.407 18.8754 43.5912C18.3824 45.0645 19.8083 46.3446 21.2978 45.8881L48.872 37.4381C49.5331 37.2355 50.2399 37.2344 50.9017 37.4348L78.7606 45.8718Z" />
          <path d="M18.8132 48.1707L48.8935 39.0472C49.5506 38.8478 50.2524 38.8473 50.9098 39.0456L81.1781 48.1752C83.6912 48.9332 85.411 51.2483 85.411 53.8735V81.2233C85.2944 87.8991 79.2977 93.25 72.6245 93.25H61.5406C60.4449 93.25 59.5577 92.3637 59.5577 91.268V81.6789C59.5577 77.9031 61.7921 74.4855 65.2498 72.9729C69.8849 70.9454 75.3681 68.2028 76.3994 62.6992C76.7323 60.9229 75.5741 59.2094 73.8024 58.8573C69.3226 57.9667 64.3562 58.3107 60.1564 60.1893C55.3887 62.3219 54.1415 65.8694 53.6797 70.6337L53.1201 75.7662C52.9491 77.3349 51.4785 78.5366 49.9014 78.5366C48.2699 78.5366 47.0465 77.294 46.8696 75.6712L46.3204 70.6337C45.9249 66.5529 45.2079 62.5887 40.9895 60.7018C36.1776 58.5494 31.3419 57.8347 26.1976 58.8573C24.426 59.2094 23.2678 60.9229 23.6007 62.6992C24.641 68.2507 30.0812 70.9305 34.7503 72.9729C38.208 74.4855 40.4424 77.9031 40.4424 81.6789V91.2663C40.4424 92.362 39.5555 93.25 38.4599 93.25H27.3756C20.7024 93.25 14.7057 87.8991 14.5891 81.2233V53.8663C14.5891 51.2446 16.3045 48.9316 18.8132 48.1707Z" />
        </svg>
      );
  
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

// export const ConnectWallet = memo<IConnect>(({ close }) : any => {
  export function ConnectWallet(props : any) {
    const { close } = props
    const { account } = useStarknet();
    const { available, connect, disconnect } = useConnectors();

    const manualConnectors = [
      new InjectedConnector({ options: { id: "argent-x"} }),
      new InjectedConnector({ options: { id: "braavos" } }),
    ];

  // if (account) {
  //   return (
  //     <div>
  //       <p>Account: {account}</p>
  //       <button onClick={() => disconnect()}>Disconnect</button>
  //     </div>
  //   );
  // }

  return (
    <>
    <div className="messageWalletParent">
      <div className="messageWallet fontHPxl-sm mx-auto text-center" style={{borderImage: `url(data:image/svg+xml;base64,${btoa(UI_Frames)}) 18 fill stretch` }}>
      <div className="closeNotif" onClick={() => close()}></div>

      <div >
          <p className="mb-3">You need a Starknet wallet</p>

          {/* {available && available.length > 0 ? 
            available.map((connector) => (
              <div className="mt-5 flex justify-center" key={connector.id()}>
                <button 
                  onClick={() => connect(connector)}
                  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                >
                  <Icon id={connector.id()} />
                  {`Connect ${connector.name()}`}
                </button>
              </div>
            ))
        
        :  */}
            <>
              <div className="mt-5 flex justify-center">
                  <button 
                    onClick={() => connect(manualConnectors[0])}
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                  >
                    <Icon id={manualConnectors[0].id()} />
                    {`Connect Argent X`}
                  </button>
              </div>

              <div className="mt-5 flex justify-center">
                  <button 
                    onClick={() => connect(manualConnectors[1])}
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                  >
                    <Icon id={manualConnectors[1].id()} />
                    {`Connect Braavos`}
                  </button>
              </div>
          </>

          {/* } */}
        </div>
        
      </div>
    </div>
  </>
  );
}

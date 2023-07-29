import Webcam from 'react-webcam';
import { toast } from 'react-toastify';
import { Button } from 'arvara-pckage';
import { useMutation } from 'react-query';
import React, { useCallback, useRef, useState } from 'react';

import Modal from './Modal';
import useAuth from '../../hooks/useAuth';
import { addCustomerImage } from '../../server';

const videoConstraints = {
  width: 800,
  height: 800,
  facingMode: 'user'
};

const CustomerSelfie = () => {
  const webcamRef = useRef(null);

  const modalState = useAuth((state) => state.modalState);
  const [isView, setIsView] = useState('camera');
  const [imgSrc, setImgSrc] = useState('');

  const closeSelfie = () => {
    useAuth.setState({ modalState: { open: false, type: '' } })
    refreshCamera();
  };

  const mutation = useMutation(addCustomerImage, {
    onSuccess: () => {
      closeSelfie();
      window.location.reload();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    }
  });

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setIsView('image');
  }, [webcamRef, setImgSrc, webcamRef]);

  const refreshCamera = () => {
    setIsView('camera');
  };

  const saveImage = async () => {
    try {
      mutation.mutateAsync({ customerImage: imgSrc });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Modal
      title="Take a Selfie"
      show={modalState.open && modalState.type === 'selfie'}
      closeModal={() => useAuth.setState({ modalState: { open: false, type: '' } })}>
      <div className="md:w-[500px]">
        {isView === 'camera' ? (
          <div className="flex justify-center">
            <Webcam
              audio={false}
              height={100}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={440}
              videoConstraints={videoConstraints}
              mirrored
            />
          </div>
        ) : (
          <div className="flex justify-center">
            {imgSrc && <img src={imgSrc} className=" md:w-[450px]" />}
          </div>
        )}
        <p className="text-grey-slate text-center mt-3">Place your head in the frame</p>

        <div className="p-5">
          <Button
            className="w-full btn-upload"
            onClick={isView === 'camera' ? capture : saveImage}
            loading={mutation.isLoading}
            disabled={mutation.isLoading}>
            {isView === 'camera' ? 'Take a picture' : 'Save to proceed'}
          </Button>
        </div>
        <p
          className="text-grey-slate font-bold text-base text-center my-3 -mt-3 cursor-pointer"
          onClick={refreshCamera}>
          Take another
        </p>
      </div>
    </Modal>
  );
};

export default CustomerSelfie;

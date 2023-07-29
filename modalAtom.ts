import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { Movie } from '../typings'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom<Movie | DocumentData | null>({
  key: 'movieState',
  default: null,
})



/* eslint-disable @typescript-eslint/ban-ts-comment */
// import * as yup from 'yup';
// import Cookies from 'js-cookie';
// import { toast } from 'react-toastify';
// import { useEffect, useState } from 'react';
// import { Button, Tab, Drawer, Spinner } from 'arvara-pckage';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { useMutation, useQuery, useQueryClient } from 'react-query';


// // import TodoCard from './TodoCard';
// import Modal from '../../../components/modal/Modal';
// // import RecentTransaction from './RecentTransaction';
// import TopNav from '../../../components/topnav/Topnav';
// import Star from '/src/assets/homeDashboard/Looper-2.svg';
// import verify from '/src/assets/homeDashboard/verify.svg';
// import { PinForm } from '../../../components/forms/PinForm';
// import { BvnForm } from '../../../components/forms/BvnForm';
// import Flutter from '/src/assets/homeDashboard/flutter.svg';
// import Money from '../../../assets/homeDashboard/Money.svg';
// import { DataForms } from '../../../components/forms/DataForm';
// import Hand from '/src/assets/homeDashboard/hand-with-coin.svg';
// import { CableForm } from '../../../components/forms/CableForm';
// import { MobileForms } from '../../../components/forms/MobileForm';
// import { NewCardForm } from '../../../components/forms/NewBankForm';
// import SuccessIcon from '../../../assets/homeDashboard/success.svg';
// import { BankCardForm } from '../../../components/forms/BankCardForm';
// import { PasswordForm } from '../../../components/forms/PasswordForm';
// import { SendMoneyForm } from '../../../components/forms/SendMoneyForm';
// import { UtilityBillForms } from '../../../components/forms/UtilityBillForm';
// import { BankTransferForm } from '../../../components/forms/BankTransferForm';
// import { TransactionPinForm } from '../../../components/forms/TransactionPinForm';
// import {
//   findWalletBalnce,
//   FundWithCard,
//   addCard,
//   CardRepayment,
//   getProfileDetail,
//   CardRepaymentApi
// } from '../../../server';
// import {
//   AIsend2Bol,
//   AImobilebol,
//   AIreceiptaddbol,
//   AIwallet3Outlin,
//   AIcardbol,
//   AIeyeslashbol
// } from 'arvara-icons';


// import { ICustomer, IHome, WalletBalType } from '../../../types';
// import { FormatNumber } from '../../../util/utils';
// import { Customer } from '../../../util/types';
// import Ads from '../../ads/Ads';
// import { getCustomerRecord } from '../../../helpers/customer_info';


// const WalletDashboard = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(0);
//   const [isBill, setIsBill] = useState(false);
//   const [isNewCard, setIsNewCard] = useState(false);
//   const [isAirtime, setIsAirtime] = useState(false);
//   const [isEnterBVN, setIsEnterBVN] = useState(false);
//   const [isSendMoney, setIsSendMoney] = useState(false);
//   const [isFundWallet, setIsFundWallet] = useState(false);
//   const [isUseBankCard, setIsUseBankCard] = useState(false);
//   const [moneyTransfer, setMoneyTransfer] = useState(false);
//   const [isBankTransfer, setIsBankTransfer] = useState(false);
//   const [transactionStep, setTransactionStep] = useState(0);
//   const [showEmailVerify, setShowEmailVerify] = useState(false);
//   const [isTransactionPin, setIsTransactionPin] = useState(false);
//   const [showConfirmingPaymentModal, setShowConfirmingPaymentModal] = useState(false);


//   const [user, setUser] = useState<ICustomer>();
//   // const [idenitity, setIden] = useState<IVS>();
//   const schema = yup.object().shape({});


//   const mutationCard = useMutation(addCard);
//   const mutation = useMutation(FundWithCard);
//   const mutationLoan = useMutation(CardRepaymentApi);


//   const [searchParams] = useSearchParams();
//   const reference = searchParams.get('reference');
//   const amount: number | string = searchParams.get('amount');


//   const addCardKey = localStorage.getItem('addCard');
//   const walletKey = localStorage.getItem('wallet-page');
//   const loanKey = localStorage.getItem('loan-key');


//   const queryclient = useQueryClient();


//   const [hideAmount, setHideAmount] = useState<boolean>(true);


//   const loanDataUse = JSON.parse(localStorage.getItem('repayData'));


//   useEffect(() => {
//     const setMyTimeout = setTimeout(() => {
//       (async () => {
//         if (reference && amount && walletKey) {
//           try {
//             const values = {
//               type: 'new',
//               platform: 'paystack',
//               amount: Number(amount) / 100,
//               reference
//             };
//             schema
//               .validate(values)
//               .then((_val) => {
//                 mutation.mutate(values, {
//                   onSuccess: (data) => {
//                     toast.success(data?.message || 'Fund Wallet Successful');
//                     setShowConfirmingPaymentModal(true);
//                     searchParams.delete('amount');
//                     searchParams.delete('reference');
//                     localStorage.removeItem('amount');
//                     localStorage.removeItem('wallet-page');
//                     setIsFundWallet(true);
//                   },
//                   onError: (e: unknown) => {
//                     if (e instanceof Error) {
//                       toast.error(e.message);
//                     }
//                   }
//                 });
//               })
//               .catch((e) => {
//                 toast.error(e.message);
//               });
//           } catch (error) {
//             toast.error(error.message);
//           }
//         } else if (reference && addCardKey) {
//           const payload = { reference };


//           schema
//             .validate(payload)
//             .then((_val) => {
//               mutationCard.mutate(payload, {
//                 onSuccess: (data) => {
//                   toast.success(data?.message || 'Add Card Successful');
//                   localStorage.removeItem('addCard');
//                 },
//                 onError: (e: unknown) => {
//                   if (e instanceof Error) {
//                     toast.error(e.message);
//                   }
//                 }
//               });
//             })
//             .catch((e) => {
//               toast.error(e.message);
//             });
//         } else if (reference && loanKey) {
//           const value = {
//             reference,
//             plaform: 'paystack',
//             loanId: loanDataUse?.loanId,
//             paymentPurpose: loanDataUse?.paymentPurpose
//           };


//           schema
//             .validate(value)
//             .then((val) => {
//               mutationLoan.mutate(value, {
//                 onSuccess: (data) => {
//                   toast.success(data?.message || 'Wallet Repayment Successful');
//                   queryclient.invalidateQueries('loanStatus');
//                   localStorage.removeItem('loan-key');
//                   localStorage.removeItem('repayData');
//                 },
//                 onError: (e: unknown) => {
//                   if (e instanceof Error) {
//                     toast.error(e.message);
//                   }
//                 }
//               });
//             })
//             .catch((e) => {
//               toast.error(e.message);
//             });
//         }
//       })();
//     }, 4000);
//     return () => clearInterval(setMyTimeout);
//   }, []);


//   useEffect(() => {
//     preload();
//   }, []);


//   const preload = async () => {
//     const user = getCustomerRecord<ICustomer>();
//     // const idenitity = getCustomerIdentity<IVS>();
//     setUser(user);
//     // setIden(idenitity)
//     const showBalance = localStorage.getItem('showBalance');
//     setHideAmount(!showBalance);
//   };


//   const { data, isLoading, isFetching, refetch } = useQuery<WalletBalType>(
//     'findWalletBal',
//     findWalletBalnce
//   );
//   useEffect(() => {
//     refetch();
//   }, [data]);


//   const onFinishStep = () => {
//     setStep(1);
//   };
//   const onTransactionFinishStep = () => {
//     setTransactionStep(1);
//   };
//   const closeDrawer = () => {
//     setStep(0);
//     setIsSendMoney((prev) => !prev);
//   };


//   const navigateToDashboard = () => {
//     navigate('/dashboard');
//   };


//   const customer = JSON.parse(localStorage.getItem('customer') as string);


//   const { data: CustomerInfo } = useQuery<IHome>('get-user-profile', () =>
//     getProfileDetail(customer?.id)
//   );


//   return (
//     <>
//       <TopNav
//         title={`Welcome ${user?.lastLogin === null ? '' : 'Back!'}`}
//         titleUser={`Hello ${user?.lastName},`}
//         icon
//       />


//       <div className="grid lg:grid-cols-3 gap-10 mb-20">
//         {/* cols one */}
//         <div className="md:col-span-2">
//           <div className="md:flex md:flex-row flex-wrap gap-x-10 gap-y-5 flex-1 overflow-hidden">
//             <div
//               style={{ flex: 3 }}
//               className="relative bg-meador md:h-56 rounded-2xl p-5 pt-8 md:shrink-0 lg:basis-[40%]">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="flex gap-3">
//                     <AIeyeslashbol
//                       onClick={() => setHideAmount(!hideAmount)}
//                       className="icon solid text-white cursor-pointer"
//                     />


//                     <h1 className="text-white text-base">Wallet Balance</h1>
//                   </div>
//                   {isLoading || isFetching ? (
//                     <Spinner color='white' size={2} />
//                   ) :
//                     CustomerInfo?.showBalance && (
//                       <div className={`${hideAmount && ''} text-white text-2xl mt-1 absolute font-bold flex whitespace-nowrap`}>
//                         {(
//                           `₦${hideAmount ? "xx,xxxx" :


//                             data?.userWallet?.balance === undefined || null
//                               ? '---,---'
//                               : FormatNumber(data?.userWallet?.balance, 2)
//                           }`
//                         )}
//                       </div>
//                     )
//                       // :
//                       // <div className="text-white text-2xl mt-1 absolute font-bold flex whitespace-nowrap">
//                       //   ******
//                       // </div>
//                     }
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className="flex items-center">
//                     <p className="text-white whitespace-nowrap flex">
//                       {' '}
//                       {isLoading || isFetching ? (
//                         <Spinner color="white" size={1.5} />
//                       ) : data?.userWallet?.accountNumber === undefined || null ? (
//                         '---,---,---'
//                       ) : (
//                         data?.userWallet?.accountNumber
//                       )}
//                     </p>
//                     <AIwallet3Outlin className="text-white ml-1" />
//                   </div>
//                 </div>
//               </div>


//               <div className="flex justify-between">
//                 <div className={` mt-16`}>
//                   {isLoading || isFetching ? (
//                     <Spinner color="white" size={1.5} />
//                   ) : CustomerInfo?.showBalance ? (
//                     <p className="backdrinvert brightness-150 text-white flex whitespace-nowrap">
//                       Ledger Balance :{' '}
//                       {`₦${
//                         data?.userWallet?.ledgerBalance === undefined || null
//                           ? '---,---'
//                           : FormatNumber(data?.userWallet?.ledgerBalance, 2)
//                       }`}
//                     </p>
//                   ) : (
//                     <p className="text-white flex whitespace-nowrap items-center">
//                       Ledger Balance : <span className="mt-2 ml-1">******</span>
//                     </p>
//                   )}
//                   <Button
//                     style={{ zIndex: '2000px' }}
//                     type="button"
//                     variant="outline"
//                     onClick={() => setIsFundWallet(true)}
//                     className="border-none">
//                     Fund Wallet
//                   </Button>
//                 </div>
//               </div>


//               <img src={Star} className="absolute block bottom-0 right-0 -z-0" />
//             </div>


//             <div className="flex flex-1">
//               <div
//                 style={{ flex: 1 }}
//                 className="bg-blue md:w-64 sm:w-80 md:h-56 rounded-2xl md:p-5 p-5 pt-8 ml-0 md:mt-0 mt-5 basis-1/3">
//                 <img src={Hand} />
//                 <p className="text-white text-base md:mt-4 mt-2">
//                   Get loans in minutes (up to NGN 500,000) in your Arvo wallet
//                 </p>
//                 <div className="mt-2 flex justify-center">
//                   <Button
//                     type="button"
//                     variant="outline"
//                     className="md:h-14 md:w-52 w-52 border-none"
//                     onClick={navigateToDashboard}>
//                     Apply for Loan
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>


//           <div className="">
//             <section className="grid grid-cols-3 gap-10  mt-8 w-full">
//               <div
//                 className="bg-white md:h-56 h-auto rounded-2xl shadow-md md:p-5 p-2 md:mt-0 mt-3 cursor-pointer hover:bg-white-azure"
//                 onClick={() => {
//                   if (data?.isPinCreated) {
//                     setIsSendMoney(true);
//                   }
//                   if (!data?.isPinCreated) {
//                     toast.error('Create Pin');
//                     setIsSendMoney(false);
//                   }
//                 }}>
//                 <div className="h-14 w-14 border border-grey-slate rounded-full mx-auto">
//                   <AIsend2Bol className="text-blue mx-3.5 my-4 cursor-pointer" />
//                 </div>
//                 <h1 className="mt-6 md:text-xl text-xs sm:text-sm font-bold text-black text-center">
//                   Send money
//                 </h1>
//                 <p className="hidden md:block text-grey-slate mt-3 md:text-sm text-xs text-center">
//                   Transfer money from your wallet to all banks
//                 </p>
//               </div>


//               <div
//                 className="bg-white md:h-56 h-auto rounded-2xl shadow-md md:p-5 p-2 md:mt-0 mt-3 cursor-pointer hover:bg-white-azure"
//                 onClick={() => {
//                   if (data?.isPinCreated) {
//                     setIsBill(true);
//                   }
//                   if (!data?.isPinCreated) {
//                     toast.error('Create Pin');
//                     setIsBill(false);
//                   }
//                 }}>
//                 <div className="h-14 w-14 border border-grey-slate rounded-full mx-auto">
//                   <AIreceiptaddbol className="text-blue mx-auto my-3.5 cursor-pointer" />
//                 </div>
//                 <h1 className="mt-6 md:text-xl text-xs sm:text-sm font-bold text-black text-center">
//                   Bills
//                 </h1>
//                 <p className="hidden md:block text-grey-slate mt-3 md:text-sm text-xs text-center">
//                   Take care of your essential bills
//                 </p>
//               </div>


//               <div
//                 className="bg-white md:h-56 h-auto rounded-2xl shadow-md md:p-5 p-2 md:mt-0 mt-3 cursor-pointer hover:bg-white-azure"
//                 onClick={() => {
//                   if (data?.isPinCreated) {
//                     setIsAirtime(true);
//                   }
//                   if (!data?.isPinCreated) {
//                     toast.error('Create Pin');
//                     setIsAirtime(false);
//                   }
//                 }}>
//                 <div className="h-14 w-14 border border-grey-slate rounded-full mx-auto">
//                   <AImobilebol className="text-blue mx-auto my-3.5 cursor-pointer" />
//                 </div>
//                 <h1 className="mt-6 md:text-xl text-xs sm:text-sm font-bold text-black text-center">
//                   Airtime/Data
//                 </h1>
//                 <p className="hidden md:block text-grey-slate mt-3 md:text-sm text-xs text-center">
//                   Recharge any mobile phone easily
//                 </p>
//               </div>
//             </section>
//           </div>


//           {/* Todo section */}
//           {/* <TodoCard
//             {...{ data }}
//             openVerifyEmail={() => {
//               setShowEmailVerify(true);
//             }}
//             openBvn={() => {
//               setIsEnterBVN(true);
//             }}
//             openTransaction={() => {
//               setIsTransactionPin(true);
//             }}
//           /> */}
//           {/* Recent Transactions */}
//           {/* <RecentTransaction /> */}
//           <div className="flex items-cent justify-center text-[#668A99] text-base font-bold leading-6 mt-[48px] mb-20">
//             <span className="cursor-pointer" onClick={() => navigate('/transactions')}>
//               See More Activities
//             </span>
//           </div>
//         </div>


//         {/* Advert Section */}
//         <Ads />
//       </div>


//       {/* ********* Drawer section ********** */}


//       {/* Enter BVN Drawer */}
//       <Drawer
//         position="right"
//         header="Enter your BVN"
//         subheader="Input your BVN to have access"
//         open={isEnterBVN}
//         close={setIsEnterBVN}>
//         <BvnForm />
//         {/* <BvnForm openSuccessModal={() => setShowConfirmingPaymentModal(true)} /> */}
//       </Drawer>


//       {/* Transaction Pin */}
//       <Drawer
//         position="right"
//         header={`${step === 0 ? 'Enter your pin' : 'Password'}`}
//         subheader={`${
//           step === 0
//             ? 'Input your pin to carry out transactions'
//             : 'Input your password to continue'
//         }`}
//         open={isTransactionPin}
//         close={setIsTransactionPin}>
//         <>
//           {transactionStep === 0 && (
//             <TransactionPinForm
//               // @ts-ignore
//               onNextStep={onTransactionFinishStep}
//             />
//           )}
//           {transactionStep === 1 && (
//             <PasswordForm openSuccessModal={() => setMoneyTransfer(true)} />
//           )}
//         </>
//       </Drawer>


//       {/* Send money Drawer*/}
//       <Drawer
//         position="right"
//         header={`${step === 0 ? 'Send Money' : 'Enter your pin'}`}
//         open={isSendMoney}
//         goBack={() => setStep((prev) => prev - 1)}
//         hasClose
//         close={() => {
//           setIsSendMoney(!isSendMoney);
//           setStep(0);
//         }}>
//         <>
//           {step === 0 && <SendMoneyForm onFinishStep={onFinishStep} />}
//           {step === 1 && <PinForm {...{ closeDrawer }} />}
//         </>
//       </Drawer>


//       {/* Bills section */}
//       <Drawer position="right" header={'Bills'} open={isBill} close={setIsBill}>
//         <Tab
//           className=""
//           data={[
//             {
//               name: 'Utility Bills',
//               render: (
//                 <>
//                   <UtilityBillForms {...{ setIsBill }} />
//                 </>
//               )
//             },
//             {
//               name: 'Cable',
//               render: (
//                 <>
//                   <CableForm {...{ setIsBill }} />
//                 </>
//               )
//             }
//           ]}
//         />
//       </Drawer>


//       {/* Airtime/Data section  Drawer*/}
//       <Drawer
//         position="right"
//         header={'Mobile'}
//         open={isAirtime}
//         close={() => setIsAirtime(!isAirtime)}>
//         <Tab
//           className=""
//           data={[
//             {
//               name: 'Airtime',
//               render: (
//                 <>
//                   <MobileForms />
//                 </>
//               )
//             },
//             {
//               name: 'Data',
//               render: (
//                 <>
//                   <DataForms />
//                 </>
//               )
//             }
//           ]}
//         />
//       </Drawer>


//       {/* Fund wallet  Drawer*/}
//       <Drawer
//         position="right"
//         header={'Select Funding Option'}
//         open={isFundWallet}
//         close={setIsFundWallet}>
//         <>
//           <div>
//             <div
//               className="w-full h-16 rounded-lg mt-5 cursor-pointer fund-button"
//               onClick={() => {
//                 setIsNewCard(false);
//                 setIsBankTransfer(false);
//                 setIsUseBankCard(true);
//                 setIsFundWallet(false);
//               }}>
//               <div className="flex my-5 mx-5">
//                 <img src={Flutter} />
//                 <h1 className="text-base ml-2">Use Bank Cards ****5678</h1>
//               </div>
//             </div>
//             <div
//               className="w-full h-16 rounded-lg mt-5 cursor-pointer fund-button"
//               onClick={() => {
//                 setIsNewCard(true);
//                 setIsUseBankCard(false);
//                 setIsBankTransfer(false);
//                 setIsFundWallet(false);
//               }}>
//               <div className="flex my-5 mx-5">
//                 <AIcardbol className="icon solid text-yellow" />
//                 <h1 className="text-base ml-2">Pay with new card</h1>
//               </div>
//             </div>


//             <CopyToClipboard
//               text={`${data?.userWallet?.accountNumber}`}
//               onCopy={() =>
//                 toast.success(`Copied Arvo Account Number ${data?.userWallet?.accountNumber} `)
//               }>
//               <div className="w-full py-[1px] rounded-lg mt-5 cursor-pointer fund-button">
//                 <div className="flex flex-col my-5 mx-5">
//                   <h1 className="text-base ml-2">
//                     Providus Bank:{' '}
//                     {data?.userWallet?.accountNumber === (undefined || null)
//                       ? '---,---,---'
//                       : data?.userWallet?.accountNumber}
//                   </h1>
//                   <h1 className="text-base ml-2">
//                     Name ARVO: {`${user?.firstName} ${user?.lastName}`}
//                   </h1>
//                 </div>
//               </div>
//             </CopyToClipboard>
//           </div>
//         </>
//       </Drawer>


//       {/* Drawer section */}
//       <Drawer
//         position="right"
//         header={'Use Bank Transfer'}
//         open={isBankTransfer}
//         close={() => setIsBankTransfer(!isBankTransfer)}>
//         <BankTransferForm openPaymentModal={() => setShowConfirmingPaymentModal(true)} />
//       </Drawer>


//       <Drawer
//         position="right"
//         header={'Use Bank Card'}
//         open={isUseBankCard}
//         close={() => setIsUseBankCard(!isUseBankCard)}>
//         <BankCardForm
//           openPaymentModal={() => {
//             setShowConfirmingPaymentModal(true);
//           }}
//         />
//       </Drawer>
//       <Drawer
//         position="right"
//         header={'Use New Card'}
//         open={isNewCard}
//         close={() => setIsNewCard(!isNewCard)}>
//         <NewCardForm
//           // @ts-ignore
//           openPaymentModal={() => {
//             setShowConfirmingPaymentModal(true);
//           }}
//         />
//       </Drawer>
//       {/* on success for fund wallet modal */}
//       <Modal
//         show={showConfirmingPaymentModal}
//         closeModal={setShowConfirmingPaymentModal}
//         title="Successful"
//         subTitle="Your action has been carried out successfully"
//         icon={<img src={SuccessIcon} />}>
//         <>
//           <div className="flex justify-center mb-5">
//             <Button
//               type="button"
//               onClick={() => {
//                 setShowConfirmingPaymentModal(false);
//               }}>
//               Completed
//             </Button>
//           </div>
//         </>
//       </Modal>
//       {/* on success for fund wallet modal end*/}


//       {/* ******** Modal section ******** */}
//       <Modal
//         type="icon"
//         show={showConfirmingPaymentModal}
//         closeModal={setShowConfirmingPaymentModal}
//         title="Successful"
//         subTitle="Your action has been carried out successfully"
//         icon={<img src={SuccessIcon} />}>
//         <>
//           <div className="flex justify-center mb-5">
//             <Button
//               type="button"
//               onClick={() => {
//                 setShowConfirmingPaymentModal(false);
//                 setIsTransactionPin(false);
//                 setIsEnterBVN(false);
//               }}>
//               Completed
//             </Button>
//           </div>
//         </>
//       </Modal>


//       <Modal
//         type="icon"
//         show={moneyTransfer}
//         closeModal={setMoneyTransfer}
//         title="Transaction Successfulccessful"
//         subTitle="Your transfer of ₦20,000.00  to
//         Sola Doyle (0198117621-GTB) was successful"
//         icon={<img src={Money} />}>
//         <>
//           <div className="flex justify-center mb-5">
//             <Button
//               type="button"
//               onClick={() => {
//                 setMoneyTransfer(false);
//               }}>
//               Completed
//             </Button>
//           </div>
//         </>
//       </Modal>


//       {/* Show verify email modal */}
//       <Modal
//         type="icon"
//         show={showEmailVerify}
//         closeModal={setShowEmailVerify}
//         title="Verification Link on its way!"
//         subTitle="For security reasons, we've sent you a mail that contains a link to verify your account"
//         icon={<img src={verify} />}>
//         <>
//           <div className="flex justify-center m-5">
//             <Button type="button" onClick={() => setShowEmailVerify(false)}>
//               Completed
//             </Button>
//           </div>
//         </>
//       </Modal>
//     </>
//   );
// };


// export default WalletDashboard;


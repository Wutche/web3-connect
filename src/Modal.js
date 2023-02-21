import {
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";

import coinbaseWallet from "../src/assets/6-WY-cbw.png";
import walletConnect from "../src/assets/6MMr-wc.png";
import metamask from "../src/assets/q4z6-mm.png";

const SelectWalletModal = ({ isOpen, closeModal }) => {
  const { activate } = useWeb3React();

  const setProvider = (type) => {
    localStorage.setItem("provider", type);
  };
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        {" "}
        <ModalHeader>Select Wallet</ModalHeader>
        <ModalCloseButton
          _focus={{
            boxShadow: "none",
          }}
        />
        <ModalBody paddingBottom={"1.5rem"}>
          <VStack>
            <Button
              variant={"outline"}
              onClick={() => {
                activate(connectors.coinbaseWallet);
                setProvider("coinbaseWallet");
                closeModal();
              }}
              w="100%"
            >
              <HStack w="100%" justifyContent={"center"}>
                <Image
                  src={coinbaseWallet}
                  alt="Coinbase Wallet Logo"
                  width={25}
                  height={25}
                  borderRadius="3px"
                />
                <Text>Coinbase Wallet</Text>
              </HStack>
            </Button>

            <Button
              variant={"outline"}
              onClick={() => {
                activate(connectors.walletConnect);
                setProvider("walletConnect");
                closeModal();
              }}
              w="100%"
            >
              <HStack w="100%" justifyContent={"center"}>
                <Image
                  src={walletConnect}
                  alt="Wallet Connect Logo"
                  width={25}
                  height={25}
                  borderRadius="3px"
                />
                <Text>Wallet Connect</Text>
              </HStack>
            </Button>

            <Button
              variant={"outline"}
              onClick={() => {
                activate(connectors.injected);
                setProvider("injected");
                closeModal();
              }}
              w="100%"
            >
              <HStack w="100%" justifyContent={"center"}>
                <Image
                  src={metamask}
                  alt="Metamask Logo"
                  width={25}
                  height={25}
                  borderRadius="3px"
                />
                <Text>Metamask</Text>
              </HStack>
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SelectWalletModal;

import {
  Avatar,
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  Image,
  VStack,
  InputGroup,
  Input,
  InputLeftElement,
  Tooltip,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { FaSun, FaMoon, FaExchangeAlt } from "react-icons/fa";

import React from "react";
import { Link, useNavigate } from "remix";

const NavHeader = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                zIndex={10}
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />

                <chakra.a href="/" w="full">
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<IoWalletOutline />}
                  >
                    Dashboard
                  </Button>
                </chakra.a>
                <Tooltip label="Coming Soon!">
                  <div>
                    <Button
                      w="full"
                      variant="ghost"
                      leftIcon={<FaExchangeAlt />}
                      disabled
                    >
                      Swap
                    </Button>
                  </div>
                </Tooltip>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<AiOutlineSearch />}
                  />
                  <Input type="tel" placeholder="Address to lookup..." />
                </InputGroup>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="DDash Home Page"
              display="flex"
              alignItems="center"
            >
              <Image src="/logo.png" height={9} rounded={4} />
              <VisuallyHidden>DDash</VisuallyHidden>
            </chakra.a>

            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <chakra.a href="/">
                <Button
                  variant="ghost"
                  leftIcon={<IoWalletOutline />}
                  size="sm"
                >
                  Dashboard
                </Button>
              </chakra.a>

              <Tooltip label="Coming Soon!">
                <div>
                  <Button
                    variant="ghost"
                    leftIcon={<FaExchangeAlt />}
                    size="sm"
                    disabled
                  >
                    Swap
                  </Button>
                </div>
              </Tooltip>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <InputGroup display={{ base: "none", md: "inline-flex" }}>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineSearch />}
              />
              <Input type="tel" placeholder="Address to lookup..." />
            </InputGroup>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default NavHeader;

const otterABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "addressHasRedeemedGiveaway",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "redeemFreeOtter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
    "inputs": [],
    "name": "isPublicMintOpen",
    "outputs": [
        {
        "internalType": "bool",
        "name": "",
        "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
        {
        "internalType": "uint32",
        "name": "_numOtters",
        "type": "uint32"
        }
    ],
    "name": "mintOtterBatch",
    "outputs": [
        {
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
        }
    ],
    "stateMutability": "payable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "getLastIdMinted",
    "outputs": [
        {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "mintOtter",
    "outputs": [
        {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
        }
    ],
    "stateMutability": "payable",
    "type": "function"
    },
    {
    "inputs": [
        {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
        }
    ],
    "name": "hasOtterVoucher",
    "outputs": [
        {
        "internalType": "bool",
        "name": "",
        "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
        {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
        }
    ],
    "name": "whitelistTypeOfAddress",
    "outputs": [
        {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
        }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "_merkleProof",
          "type": "bytes32[]"
        }
      ],
      "name": "redeemFreeOtter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
    "inputs": [],
    "name": "redeemWhitelistBundle",
    "outputs": [
        {
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
        }
    ],
    "stateMutability": "payable",
    "type": "function"
    },
    {
    "inputs": [
        {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
        }
    ],
    "name": "getOtters",
    "outputs": [
        {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "ottersAreRevealed",
    "outputs": [
        {
        "internalType": "bool",
        "name": "",
        "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
        {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
        }
    ],
    "name": "uri",
    "outputs": [
        {
        "internalType": "string",
        "name": "",
        "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
        {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
        }
    ],
    "name": "getAvailableOtters",
    "outputs": [
        {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
        {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
        }
    ],
    "name": "hasRedeemedBundle",
    "outputs": [
        {
        "internalType": "bool",
        "name": "",
        "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
    }
]
// Send a Mint event 
// On TX finish, display otters 
const otterAddress = "0x18A0DA358A0c792fd47Dd4a620b7069801CDa24F"
let otterContract; 
let showFreeRedeem = false;
let showOffer = false;
let isPublicMintOpen = true;
let hasRedeemedBundle = true;
let whitelistType = 0;
let hasMintedMax = false;
let bulkNumber = 1;
let numOttersAllowed = 100;
let otterPrice = 30000000000000000;
let proof = []

window.userWalletAddress = null
const loginButton = document.getElementById('loginButton')
const switchNetworkButton = document.getElementById('switchNetworkButton')
const mintButton = document.getElementById('mint')
const redeemButton = document.getElementById('redeem')
const bulkPublicButton = document.getElementById('bulk-public')
const bulkButton = document.getElementById('bulk')
const mainMintButton = document.getElementById('mainMint')
const mintMoreButton = document.getElementById('mint-more')
const mintHalfButton = document.getElementsByName('mint-btn-half')
const redeemOfferButton = document.getElementById('redeem_offer')

const userWallet = document.getElementById('userWallet')
const lastOtterMinted = document.getElementById('lastOtterMinted')
const txHash = document.getElementById('txHash')
const loadingImg = document.getElementById('loading')
const incrementUp = document.getElementById("increment-up")
const incrementDown = document.getElementById("increment-down")

const otterList = document.getElementById('otterList')
const mintedOtterImg = document.getElementById('mintedOtter')
const headerCollection = document.getElementsByName("mintHeader");
const bulkInfoPublicPrice = document.getElementById("bulk-info-public-price")

const modalState = document.getElementById('modal-1')
const redeemModal = document.getElementById('redeem_modal')
const redeemOfferModal = document.getElementById('redeem_offer_modal')
const loadingModal = document.getElementById('loading_modal')
const successfulMintModal = document.getElementById('successful_mint_modal')
const bundleModal = document.getElementById('bundle_modal')
const publicBundleModal = document.getElementById('public_bundle_modal')
const mintSingleModal = document.getElementById('mint_single_modal')
const displayModal = document.getElementById('display_modal')  

let web3Injector = window.ethereum ? window.ethereum : window.gamestop ? window.gamestop : null

const modalList = [redeemModal, loadingModal, successfulMintModal, bundleModal, mintSingleModal, displayModal, publicBundleModal, redeemOfferModal]

// const extraModalImage = document.getElementById('extra-img')

modalState.addEventListener('change', (value) => {
    $('body').toggleClass('no-scroll');
    if (!document.body.classList.contains('no-scroll')) {
        hideAllModals()
    }
})

function hideAllModals() {
    modalList.forEach((_modal) => {
        _modal.setAttribute("hidden", "hidden")
    })
}

function showLoadingModal() {
    hideAllModals();
    loadingModal.removeAttribute('hidden')
}

function showMintSuccessModal() {
    hideAllModals();
    successfulMintModal.removeAttribute('hidden')
}

function toggleButton() {
    if (!web3Injector) {
        loginButton.innerText = 'MetaMask is not installed'
        loginButton.classList.remove('bg-purple-500', 'text-white')
        loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
        return false
    }
    else if (web3Injector.isMetaMask) {
        loginButton.innerText = 'Login with MetaMask'
        loginButton.classList.add('bg-purple-500')
        loginButton.classList.remove('bg-black')
    }
    else if(web3Injector.isGamestop) {
        // web3Injector.chainId = '0x5'
        loginButton.innerText = 'Login with GameStop'
        loginButton.classList.remove('bg-purple-500')
        loginButton.classList.add('bg-black')
    }

    loginButton.addEventListener('click', loginWithMetaMask)

    if(window.ethereum && window.gamestop) {
        switchNetworkButton.innerText = "Switch to GameStop"
        switchNetworkButton.classList.remove('bg-purple-500')
        switchNetworkButton.classList.add('bg-black')
        switchNetworkButton.addEventListener('click', switchNetworks)
    } 
    else switchNetworkButton.setAttribute('hidden','hidden')
}

function switchNetworks() {
    if (web3Injector.isMetaMask) {
        signOutOfMetaMask()
        console.log("switch to gamestop")
        web3Injector = window.gamestop 
        console.log(web3Injector)
        loginButton.innerText = 'Login with GameStop'
        loginButton.classList.remove('bg-purple-500')
        loginButton.classList.add('bg-black')

        switchNetworkButton.innerText = "Switch to Metamask"
        switchNetworkButton.classList.add('bg-purple-500')
        switchNetworkButton.classList.remove('bg-black')
    }
    else if (web3Injector.isGamestop) {
        signOutOfMetaMask()
        console.log("switch to metamask")
        web3Injector = window.ethereum 
        loginButton.innerText = 'Login with MetaMask'
        loginButton.classList.add('bg-purple-500')
        loginButton.classList.remove('bg-black')
        
        switchNetworkButton.innerText = "Switch to GameStop"
        switchNetworkButton.classList.remove('bg-purple-500')
        switchNetworkButton.classList.add('bg-black')
    } 
}

function changeBulkIncrement(increment) {
    console.log("INCREMENT", increment)
    if (bulkNumber + increment <= numOttersAllowed  && bulkNumber + increment >= 0) bulkNumber = bulkNumber + increment 

    bulkInfoPublicPrice.innerText = `${bulkNumber} of ${numOttersAllowed} (${(bulkNumber * 0.03).toFixed(2)} ETH)`
}

function onClickTest() {
    console.log("CLICKED ME")
}

async function loginWithMetaMask() {
    const accounts = await web3Injector.request({ method: 'eth_requestAccounts' })
    .catch((e) => {
        console.error(e.message)
        return
    })
    if (!accounts) { return }
    mainMintButton.removeAttribute("hidden")

    window.userWalletAddress = accounts[0]
    userWallet.innerText = `Logged in as ${window.userWalletAddress.substr(0, 5)}...${window.userWalletAddress.substr(userWalletAddress.length - 4, userWalletAddress.length)}`
    loginButton.innerText = `Sign out of ${web3Injector.isMetaMask ?  'MetaMask' : 'GameStop'}`
    
    const web3 = new Web3(web3Injector)
    otterContract = new web3.eth.Contract(otterABI, otterAddress)
    console.log("CONTRACT", otterContract)

    mintButton.addEventListener('click', mintOtter)
    mintHalfButton.forEach((_button) => _button.addEventListener('click', mintOtter))
    redeemButton.addEventListener('click', redeemOtter)
    redeemOfferButton.addEventListener('click', reedemOtterOffer)
    bulkButton.addEventListener('click', bulkMintOtter)
    bulkPublicButton.addEventListener('click', bulkMintOtterPublic)

    loginButton.removeEventListener('click', loginWithMetaMask)
    setTimeout(() => {
        loginButton.addEventListener('click', signOutOfMetaMask)
    }, 200)

    mainMintButton.addEventListener('click', updateContractVarsAndUpdateModal)
    mintMoreButton.addEventListener('click', mintMore)
    incrementUp.addEventListener('click', () => changeBulkIncrement(1))
    incrementDown.addEventListener('click', () => changeBulkIncrement(-1))
    await updateContractVarsAndUpdateModal()
}

async function updateContractVarsAndUpdateModal() {
    const merkleRestEndpoint = `https://play.reef.game/rest/otter-whitelist?address=${window.userWalletAddress}`
    $.get(merkleRestEndpoint, (data, status) => {
        whitelistType = parseInt(data.type)
        proof = data.proof

        console.log("WL TYPE: ", whitelistType)
        console.log("PROOF: ", proof)

        otterContract.methods.addressHasRedeemedGiveaway(window.userWalletAddress).call({from: window.userWalletAddress}).then((_hasRedeemed) => {
            otterContract.methods.whitelistTypeOfAddress(window.userWalletAddress).call({from: window.userWalletAddress}).then((num) => {
                // if (parseInt(num) !== 0) showFreeRedeem = true;

                // Figure out if user can redeem
                otterContract.methods.getOtters(window.userWalletAddress).call({from: window.userWalletAddress}).then((nums) => {
                    console.log(`OWNED OTTERS`, nums)
                    console.log(`nums.length`, nums.length === 0)
                    if (whitelistType !== 0 && nums.length === 0) {
                        showFreeRedeem = true
                        console.log("SHOW FREE REDEEM")
                    }
                    else showFreeRedeem = false

                    // new package offer logic
                    showOffer = !_hasRedeemed && !showFreeRedeem
                    

                    otterContract.methods.getAvailableOtters(window.userWalletAddress).call({from: window.userWalletAddress}).then((_numOtters) => {
                        console.log("Num OTTERS", _numOtters)
                        numOttersAllowed = parseInt(_numOtters);
                        console.log("Num OTTERS", numOttersAllowed)
                        otterContract.methods.getLastIdMinted().call({from: window.userWalletAddress}).then((_id) => {
                            lastOtterMinted.innerText = `${parseInt(_id)} / 2500\n`
                            lastOtterMinted.style = "color: white; font-weight: bold; font-size: 36px; font-family: 'Baloo'"
                            otterContract.methods.hasRedeemedBundle(window.userWalletAddress).call({from: window.userWalletAddress}).then((redeemed) => {
                                console.log("has redeemed bundle", redeemed)
                                // redeemed ? bulkButton.setAttribute("hidden", "hidden") : bulkButton.removeAttribute("hidden");
                        
                                otterContract.methods.whitelistTypeOfAddress(window.userWalletAddress).call({from: window.userWalletAddress}).then((num) => {
                                    if (num !== 0) {
                                        console.log("whitelist type", num)
                                        hasRedeemedBundle = redeemed;
                                        // whitelistType = parseInt(num)
                                        
                                        if (parseInt(num) === 1) {
                                            // extraModalImage.setAttribute("hidden", "hidden")
                                            console.log("updated bulk-info text")
                                            document.getElementById('bulk-info').innerText = `Whitelist Package Discount:\n Bulk Mint 2 Otters for 0.03 ETH Total`
                                            headerCollection.forEach((_header) => {
                                                _header.innerText = "Mint An Otter - Whitelisted"
                                            })
                                        }
                                        else if (parseInt(num) === 2) {
                                            // extraModalImage.removeAttribute("hidden")
                                            console.log("updated bulk-info text")
                                            document.getElementById('bulk-info').innerText = `OG Whitelist Package Discount:\n Bulk Mint 3 Otters for 0.03 ETH Total`
                                            headerCollection.forEach((_header) => {
                                                _header.innerText = "Mint An Otter - OG Whitelisted"
                                            })
                                        }
                                        bulkInfoPublicPrice.innerText = `${bulkNumber} of ${numOttersAllowed} (${(bulkNumber * 0.03).toFixed(2)} ETH)`
                                    }
                        
                                    otterContract.methods.getOtters(window.userWalletAddress).call({from: window.userWalletAddress}).then((nums) => {
                                        console.log(`OWNED OTTERS ${nums}`)
                                        let numsArr = nums.toString().split(',')
                                        // console.log(`numsArr ${numsArr}`)
                                        // console.log(`numsArr length`, numsArr.length > 0)
                                        // console.log(`numsArr length`, numsArr.length)
                                        // console.log(`nums ${nums}`)
                                        // console.log(`nums length`, nums.length > 0)
                                        // console.log(`nums length`, nums.length)
                                        let uris = []
                                        if (nums.length > 0) showFreeRedeem = false;

                                        if (nums.length >= numOttersAllowed) {
                                            console.log("MAX OTTERS MINTED")
                                            hasMintedMax = true
                                        }
                                        numsArr.forEach((_num) => {
                                            console.log(_num)
                                            console.log(parseInt(_num))
                                            if(_num) {
                                                otterContract.methods.uri(parseInt(_num)).call({from: window.userWalletAddress}).then((_uri) => {
                                                    uris.push(_uri)
                                                    console.log(`URI ${_uri}`)
                                                    otterList.innerHTML = ""
                                                    $.get(_uri, (data, status) => {
                                                        console.log("STATUS", status)
                                                        console.log("DATA", data)
                                                        console.log("Img URL", data.image)
                                                        
                                                        var li = document.createElement("li");
                                                        li.setAttribute('class','item');
                        
                                                        var img = document.createElement('img');
                                                        img.src = data.image;
                                                        li.appendChild(img);
                        
                                                        
                                                        var img = document.createElement('img');
                                                        var a = document.createElement('a')
                                                        a.href=`https://opensea.io/assets/${otterAddress}/${_num}`
                                                        a.target = "_blank"
                                                        a.style="max-width: 100%;height: auto;display: block;vertical-align: middle;"
                        
                                                        img.src = data.image;
                                                        a.appendChild(img)
                        
                                                        otterList.appendChild(img)
                                                    })
                                                    
                                                })
                                            }
                                        })
                                    }).then(() => {
                                        updateModalState()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        
    })
}

function mintMore() {
    // call contracts to see if another voucher exists
    hideAllModals();
    updateContractVarsAndUpdateModal()
}

function reedemOtterOffer() {
    console.log("otterContract", otterContract)
    otterContract.methods.redeemFreeOtter().send({to: otterAddress, from: window.userWalletAddress}, () => { 
        console.log("FREE REDEEM CLICKED")
    }).on('error', (error) =>{ 
        console.log("TX Rejected.")
    })
    .on('transactionHash', (hash) => {
        // display txHash
        showLoadingModal()
        console.log(hash);
        txHash.innerText = `View TX on Etherscan`
        txHash.href = `https://etherscan.io/tx/${hash}`
        txHash.removeAttribute('hidden')
        // mintButton.removeAttribute("hidden")
        // bulkButton.removeAttribute("hidden")
    }).on('block', ()=>{
        console.log("keep alive")
    }).on('confirmation', (confirmationNumber, receipt) => { 
        // display Otter minted animation, display minted otters on screen, link to otters on opensea
        if (confirmationNumber === 2) {
            let txData = receipt['events'][0]['raw']['data'].slice(2)
            let dataParams = []

            for(let i = 0; i < txData.length / 64; i++) {
                dataParams.push(txData.substring(i*64, (i+1)*64))
            }

            let numberOfOttersMinted = parseInt(dataParams[2], 16)
            
            dataParams.forEach((_param, _index) => {
                if (_index >= numberOfOttersMinted) return;
                
                // first 3 params are junk, shift index
                let washedIndex = _index + 3
                let otterId = parseInt(dataParams[washedIndex], 16)

                console.log("otterId",otterId);
                console.log(`OpenSea Info: https://opensea.io/assets/${otterAddress}/${otterId}`)

                mintedOtterImg.innerHTML = '';
                mintedOtterImg.style = "width:100%; margin:5% 0 0 -50%"
                otterContract.methods.uri(otterId).call({from: window.userWalletAddress}).then((_uri) => {
                    console.log(`URI ${_uri}`)
                    $.get(_uri, (data, status) => {
                        var img = document.createElement('img');
                        var a = document.createElement('a')
                        a.href=`https://opensea.io/assets/${otterAddress}/${otterId}`
                        a.target = "_blank"
                        img.src = data.image;
                        img.style = "width:90%"
                        a.appendChild(img)
                        a.style= "width:120%"

                        // mintedOtterImg.innerHTML = '';
                        mintedOtterImg.appendChild(a);
                    })
                })
            })
            showMintSuccessModal()
        }
    })

}

function redeemOtter() {
    otterContract.methods.redeemFreeOtter(proof).send({to: otterAddress, from: window.userWalletAddress}, () => { 
        console.log("FREE REDEEM CLICKED")
    }).on('error', (error) =>{ 
        console.log("TX Rejected.")
    })
    .on('transactionHash', (hash) => {
        // display txHash
        showLoadingModal()
        console.log(hash);
        txHash.innerText = `View TX on Etherscan`
        txHash.href = `https://etherscan.io/tx/${hash}`
        txHash.removeAttribute('hidden')
        // mintButton.removeAttribute("hidden")
        // bulkButton.removeAttribute("hidden")
    }).on('block', ()=>{
        console.log("keep alive")
    }).on('confirmation', (confirmationNumber, receipt) => { 
        // display Otter minted animation, display minted otters on screen, link to otters on opensea
        if (confirmationNumber === 2) {
            // if whitelistType = 2
            // if (whitelistType === 1) {
            //     let otterId = parseInt(receipt['events'][0]['raw']['data'].substring(2,66), 16)
            //     console.log("otterId",otterId);
            //     console.log(`OpenSea Info: https://opensea.io/assets/${otterAddress}/${otterId}`)

            //     otterContract.methods.uri(otterId).call({from: window.userWalletAddress}).then((_uri) => {
            //         console.log(`URI ${_uri}`)
            //         $.get(_uri, (data, status) => {
            //             var img = document.createElement('img');
            //             var a = document.createElement('a')
            //             a.href=`https://opensea.io/assets/${otterAddress}/${otterId}`
            //             a.target = "_blank"
            //             img.src = data.image;
            //             a.appendChild(img)

            //             mintedOtterImg.innerHTML = '';                        
            //             mintedOtterImg.style = ""
            //             mintedOtterImg.appendChild(a);
            //         })
            //     }).then(() => showMintSuccessModal())
            // }
            //else if (whitelistType === 2) {
                let txData = receipt['events'][0]['raw']['data'].slice(2)
                let dataParams = []

                for(let i = 0; i < txData.length / 64; i++) {
                    dataParams.push(txData.substring(i*64, (i+1)*64))
                }

                let numberOfOttersMinted = parseInt(dataParams[2], 16)
                
                dataParams.forEach((_param, _index) => {
                    if (_index >= numberOfOttersMinted) return;
                    
                    // first 3 params are junk, shift index
                    let washedIndex = _index + 3
                    let otterId = parseInt(dataParams[washedIndex], 16)

                    console.log("otterId",otterId);
                    console.log(`OpenSea Info: https://opensea.io/assets/${otterAddress}/${otterId}`)

                    mintedOtterImg.innerHTML = '';
                    mintedOtterImg.style = "width:100%; margin:5% 0 0 -50%"
                    otterContract.methods.uri(otterId).call({from: window.userWalletAddress}).then((_uri) => {
                        console.log(`URI ${_uri}`)
                        $.get(_uri, (data, status) => {
                            var img = document.createElement('img');
                            var a = document.createElement('a')
                            a.href=`https://opensea.io/assets/${otterAddress}/${otterId}`
                            a.target = "_blank"
                            img.src = data.image;
                            img.style = numberOfOttersMinted === 2 ? "width:70%" : "width:90%"
                            a.appendChild(img)
                            a.style= "width:120%"

                            // mintedOtterImg.innerHTML = '';
                            mintedOtterImg.appendChild(a);
                        })
                    })
                })
                showMintSuccessModal()
            //}       
        }
    })
}

function bulkMintOtterPublic() {
    otterContract.methods.mintOtterBatch(bulkNumber).send({to: otterAddress, from: window.userWalletAddress, value: otterPrice * bulkNumber}, () => { 
        console.log("BULK MINT CLICKED")
    }).on('error', (error) =>{ 
        console.log("TX Rejected.")
    }).on('transactionHash', (hash) => {
        // display txHash
        showLoadingModal()
        console.log(hash);
        txHash.innerText = `View TX on Etherscan`
        txHash.href = `https://etherscan.io/tx/${hash}`
        // bulkButton.setAttribute("hidden", "hidden")
    }).on('block', ()=>{
        console.log("keep alive")
    }).on('confirmation', (confirmationNumber, receipt) => { 
        // display Otter minted animation, display minted otters on screen, link to otters on opensea
        console.log(receipt); 
        if (confirmationNumber === 2) {
            // let otterId = parseInt(receipt['events'][0]['raw']['data'].substring(2,66), 16)
            // let numMinted = parseInt(receipt['events'][0]['raw']['data'].substring(130,194), 16)
            
            let txData = receipt['events'][0]['raw']['data'].slice(2)
            let dataParams = []

            for(let i = 0; i < txData.length / 64; i++) {
                dataParams.push(txData.substring(i*64, (i+1)*64))
            }

            let numberOfOttersMinted = parseInt(dataParams[2], 16)
            
            dataParams.forEach((_param, _index) => {
                if (_index >= numberOfOttersMinted) return;
                
                // first 3 params are junk, shift index
                let washedIndex = _index + 3
                let otterId = parseInt(dataParams[washedIndex], 16)

                console.log("otterId",otterId);
                console.log(`OpenSea Info: https://opensea.io/assets/${otterAddress}/${otterId}`)

                mintedOtterImg.innerHTML = '';
                mintedOtterImg.style = "width:100%; margin:5% 0 0 -50%"
                otterContract.methods.uri(otterId).call({from: window.userWalletAddress}).then((_uri) => {
                    console.log(`URI ${_uri}`)
                    $.get(_uri, (data, status) => {
                        var img = document.createElement('img');
                        var a = document.createElement('a')
                        a.href=`https://opensea.io/assets/${otterAddress}/${otterId}`
                        a.target = "_blank"
                        img.src = data.image;
                        img.style= numberOfOttersMinted === 2 ? "width:70%" : numberOfOttersMinted > 3 ? "width:90%; height:50%" : "width:90%" 
                        a.appendChild(img)
                        a.style= "width:120%"

                        // mintedOtterImg.innerHTML = '';
                        mintedOtterImg.appendChild(a);
                    })
                })
            }) //.then(() => showMintSuccessModal())
            showMintSuccessModal()
                    
        }
    })
}

function bulkMintOtter() {
    otterContract.methods.redeemWhitelistBundle().send({to: otterAddress, from: window.userWalletAddress, value: otterPrice}, () => { 
        console.log("BULK MINT CLICKED")
    }).on('error', (error) =>{ 
        console.log("TX Rejected.")
    }).on('transactionHash', (hash) => {
        // display txHash
        showLoadingModal()
        console.log(hash);
        txHash.innerText = `View TX on Etherscan`
        txHash.href = `https://etherscan.io/tx/${hash}`
        // bulkButton.setAttribute("hidden", "hidden")
    }).on('block', ()=>{
        console.log("keep alive")
    }).on('confirmation', (confirmationNumber, receipt) => { 
        // display Otter minted animation, display minted otters on screen, link to otters on opensea
        console.log(receipt); 
        if (confirmationNumber === 2) {
            // let otterId = parseInt(receipt['events'][0]['raw']['data'].substring(2,66), 16)
            // let numMinted = parseInt(receipt['events'][0]['raw']['data'].substring(130,194), 16)
            
            let txData = receipt['events'][0]['raw']['data'].slice(2)
            let dataParams = []

            for(let i = 0; i < txData.length / 64; i++) {
                dataParams.push(txData.substring(i*64, (i+1)*64))
            }

            let numberOfOttersMinted = parseInt(dataParams[2], 16)

            dataParams.forEach((_param, _index) => {
                if (_index >= numberOfOttersMinted) return;
                
                // first 3 params are junk, shift index
                let washedIndex = _index + 3
                let otterId = parseInt(dataParams[washedIndex], 16)

                console.log("otterId",otterId);
                console.log(`OpenSea Info: https://opensea.io/assets/${otterAddress}/${otterId}`)

                mintedOtterImg.innerHTML = '';
                mintedOtterImg.style = "width:100%; margin:5% 0 0 -50%"
                otterContract.methods.uri(otterId).call({from: window.userWalletAddress}).then((_uri) => {
                    console.log(`URI ${_uri}`)
                    $.get(_uri, (data, status) => {
                        var img = document.createElement('img');
                        var a = document.createElement('a')
                        a.href=`https://opensea.io/assets/${otterAddress}/${otterId}`
                        a.target = "_blank"
                        img.src = data.image;
                        img.style= numberOfOttersMinted === 2 ? "width:70%" : "width:90%" 
                        a.appendChild(img)
                        a.style= "width:120%"

                        // mintedOtterImg.innerHTML = '';
                        mintedOtterImg.appendChild(a);
                    })
                }).then(() => showMintSuccessModal())
            })
                    
        }
    })

}

function mintOtter() {
    otterContract.methods.mintOtter().send({to: otterAddress, from: window.userWalletAddress, value: otterPrice}, () => { 
        console.log("MINT CLICKED")
    }).on('error', (error) =>{ 
        console.log("TX Rejected.")
    }).on('transactionHash', (hash) => {
        // display txHash
        showLoadingModal()
        console.log(hash);
        txHash.innerText = `View TX on Etherscan`
        txHash.href = `https://etherscan.io/tx/${hash}`
    }).on('block', ()=>{
        console.log("keep alive")
    }).on('confirmation', (confirmationNumber, receipt) => { 
        // display Otter minted animation, display minted otters on screen, link to otters on opensea
        if (confirmationNumber === 2) {
            let otterId = parseInt(receipt['events'][0]['raw']['data'].substring(2,66), 16)
            console.log("otterId",otterId);
            console.log(`OpenSea Info: https://opensea.io/assets/${otterAddress}/${otterId}`)

            otterContract.methods.uri(otterId).call({from: window.userWalletAddress}).then((_uri) => {
                console.log(`URI ${_uri}`)
                $.get(_uri, (data, status) => {
                    var img = document.createElement('img');
                    var a = document.createElement('a')
                    a.href=`https://opensea.io/assets/${otterAddress}/${otterId}`
                    a.target = "_blank"
                    img.src = data.image;
                    a.appendChild(img)

                    mintedOtterImg.innerHTML = '';                
                    mintedOtterImg.style = ""
                    mintedOtterImg.appendChild(a);
                })
            }).then(() => showMintSuccessModal())
                    
        }
    })
}

function signOutOfMetaMask() {
    hasMintedMax = false
    window.userWalletAddress = null
    userWallet.innerText = ''
    loginButton.innerText = web3Injector.isMetamask ? 'Sign in with MetaMask' : 'Sign in with GameStop'

    
    mainMintButton.setAttribute("hidden","hidden")

    loginButton.removeEventListener('click', signOutOfMetaMask)
    setTimeout(() => {
        loginButton.addEventListener('click', loginWithMetaMask)
    }, 200)
}

function updateModalState() {
    if (hasMintedMax) {
        console.log("SHOW MODAL displayModal")
        displayModal.removeAttribute("hidden")
        document.getElementById('display_p').innerText = "You have reached the max otter mint limit, thanks for supporting Reef Game!"
        document.getElementById('display_h1').innerText = "Max Mint Limit Reached"
        document.getElementById('display_viewport').removeAttribute("hidden")
        document.getElementById('display_img').setAttribute("hidden", "hidden")
    }
    else if (showFreeRedeem) {
        console.log("SHOW MODAL redeemModal")
        redeemModal.removeAttribute("hidden")
    }
    else if (showOffer) {
        console.log("SHOW MODAL redeemOfferModal")
        redeemOfferModal.removeAttribute("hidden")
    }
    else if (whitelistType === 0 && isPublicMintOpen) {
        console.log("SHOW MODAL publicBundleModal")
        publicBundleModal.removeAttribute("hidden")
    }
    else if (whitelistType === 0 && !isPublicMintOpen) {
        console.log("SHOW MODAL displayModal")
        displayModal.removeAttribute("hidden")
        document.getElementById('display_p').innerText = "Public mint is not yet open."
        document.getElementById('display_h1').innerText = "Public Mint Not Open"
        document.getElementById('display_viewport').setAttribute("hidden","hidden")
        document.getElementById('display_img').removeAttribute("hidden")
    }
    else if(whitelistType !== 0 && !hasRedeemedBundle) {
        console.log("SHOW MODAL bundleModal")
        bundleModal.removeAttribute("hidden")
    }
    else if(hasRedeemedBundle) {
        console.log("SHOW MODAL publicBundleModal")
        publicBundleModal.removeAttribute("hidden")
    }
    else {
        // TODO: add isPublicSaleOpen
        publicBundleModal.removeAttribute("hidden")
    }
    
    otterContract.methods.getLastIdMinted().call({from: window.userWalletAddress}).then((_id) => {
        lastOtterMinted.innerText = `${parseInt(_id)} / 2500\n`
        lastOtterMinted.style = "color: white; font-weight: bold; font-size: 36px; font-family: 'Baloo'"
    })
}

window.addEventListener('DOMContentLoaded', () => {
    toggleButton()
});
    
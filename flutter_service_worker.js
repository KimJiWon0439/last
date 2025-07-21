'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1cb45548243dd2c081d76f03097e353d",
".git/config": "fc70712fb82c1c206348a3b08ff05220",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "df072b828c44bf2a00ac2366c6b4b02e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e4ad49eb95f870c12ea2e0c63d0c58e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1dd005df3735f9c4888c63f5c5a0ce76",
".git/logs/refs/heads/main": "395b426475314149dfa896837cd59fad",
".git/logs/refs/remotes/origin/HEAD": "0e481dd0a248248a7fa64ceb0a16c937",
".git/logs/refs/remotes/origin/main": "05ab69a4223bc1c1d3daa8da5ae58821",
".git/objects/01/164d1d2dc346af52187e767db775d23cb27f21": "90c04d1b5aa67d1a4a0ab27c8b4722f7",
".git/objects/01/78b095a2ffdd00bdbfed3c19aa63788e463483": "76c6218356b99f178340299cf1659081",
".git/objects/02/ef475b3a9ca7f3ba6e058fbf1827f62b5bee30": "29767d634236cdd7899b7eef92c66c5c",
".git/objects/03/9fb39dd4b00dfc536ac726119d4c54340116bc": "389c58c71b809ae1f753b943d2b1afd5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/36e903001971634698e79990aa46dcdba30d85": "6cfee8c7196ee4e6bfe9b09836856e76",
".git/objects/05/7bcc1fd8eeaab95020620c97ffd53c128d1ad3": "d6a8fdebd3ad2f4b024b6549e0130055",
".git/objects/05/d93027a6f72a16fece24f67acb5064039f53fc": "899a98aaa4482dcc9d32be8159d70f9d",
".git/objects/0a/833cc05c568867f88424ab58c4ff4d049c27ad": "2e9e513cd4ce43d8653461a0a5d2df0f",
".git/objects/0b/e52a2097a19a3b78c9668491fadc4223925a97": "2baf2746a6c72233b4c3bcf35e371b91",
".git/objects/0c/971d7a6f2e24dae1e69ab09db0c9a43e18b1b0": "9a965c093b72e3d52bdc8d231007b544",
".git/objects/0c/ed70599d5d87fce7bb60edb95a1048891d7420": "7cff5a9a89487d95c89c27b4e409c797",
".git/objects/0f/4362d2962002c581a0891ad8c8c54e3d499ab6": "d801aa099036fdbeb9b88337cf7fdf72",
".git/objects/13/bca9b56feb303f57933ab19fae9bad2830249c": "671f67bfc6eae3d4734f2ee38c07974a",
".git/objects/16/07629a2c4262bd214734e1f2e97259f3b1b1c6": "6144cb6e21e751c22a7bebbf360001d3",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/f28727fe623b688865ee7152cb47315c094ffd": "6d05c2fd05f6d4f86c82ebabb0f1a349",
".git/objects/1f/3b7b8e2b85899a5f92d8ddac1b43933ebc82a2": "638129c62346a9342d984a0e9962c7da",
".git/objects/1f/83619f6394e6ba8858aff120454412b55370b2": "1edab7a0dc80a88e1bb45df625c4aad4",
".git/objects/21/58ff3c5a4458abe0c709fa946df2a06529ab30": "d0fcdb346327b9f0f27bfcd079ae17fa",
".git/objects/23/16f6acc547198259725486924e1763d5326d12": "37d8d852432e760123f957decc529d00",
".git/objects/24/ed8e931bc978b8673bf3085aff1ebec3751bd3": "575ba1ce1dd93fa0489569c5e70af5c2",
".git/objects/27/30e3b7c78bff3f182fcd3013f40ab5addd60ff": "5f8842304c2100d2decaa2d54c2a6f86",
".git/objects/28/17fa6cb37de1a442cea24bb80eca65a3593684": "6cb5254eab811a6a34d2220174a3fef8",
".git/objects/29/c9e907638302a84a03310a26d6777b557df1b2": "8b62a7c4da9be38403e9a025fa2d011f",
".git/objects/2f/eb3fbbf70e8dc57deab46c9378cf3e0782d659": "2d3811fc8945ea77029063d865f1a58b",
".git/objects/30/0136184ed7cea1dadf4808da1af0172e91e5e5": "4bfa00f3dc5eb4a7d82104ec8c915aba",
".git/objects/30/6f4364d66340dca5351bae6f8c0d7fbaebb637": "3a9d5ec8e4ab272a42d553646ad09075",
".git/objects/39/70f308f23e5de671a81b42fbc5431ca7bad11b": "aa61f09fff36c43bdcdd9fdb919ff96a",
".git/objects/3a/de5178d12ad01bd932caea87467067090f0fec": "7c3c05a0453342f8a4c2cede0810456a",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/41/2e1b62efbe112e3f40ca1490e64691e614870a": "02d37da0df400c752f7b9feb8376f32d",
".git/objects/46/21965ab908033e555c1bd42b70f61a22f4ab19": "f324b5a9b7ae0e01b05da5e27e1eb0f3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/51/fd93aeb82a68c5df248a9b21d2fea2c39e2de0": "5649b3e17b1dd958ead2cbe9e02e6693",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/1858b972a5847ec9c4e5d332f5f7b1add1dc72": "25b9789941530dbf10c487f63152e314",
".git/objects/56/b8eeac6ef0c55bfe1762c341e33a9e06fc22ee": "4e0c76e002c02073d1c298366c28d4f2",
".git/objects/58/43d7609a5fd5be4a5e4748f0fb628f3387afa3": "a172f22036cdbb7c6e5c2a51198aadac",
".git/objects/59/6fdf582c97ed49eef79f1bd40a55a08bd27df4": "e0e3aba8ffaf5ea322d4cdd0dd864140",
".git/objects/59/9bbe109591328e1badd51f5775b020c197e9f4": "ca8607f7c916884912c3fd928704db61",
".git/objects/5c/41f207c591643f734c86d1ee8e9d251d2adf98": "c94fed7d111ed1f6796944092f2cfd15",
".git/objects/5e/df8870f8e1ea2560832454df934243de9d57cb": "f3fa492db25e1e5853b435c1747023e2",
".git/objects/60/29ffe88bc04c0017c4e2d3d2a2fc3ee2b0b9d0": "3da70e8a17e6a65b7d9e784b58f8d4d2",
".git/objects/63/1e285fa0ef92bbb7cc09723169ebef296837ff": "7bb0ce72418d617ceb4c51906cd5256b",
".git/objects/63/e29ec922442fa5a0c00ae9d899f55f359d17ed": "c3edc2766f808a4c48459f57e3cef5c8",
".git/objects/69/0404306ee5803ee4c47be9dda4c2195845456e": "4eadd4294b2a34809158966446c49687",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/a528e73d4244109d8d50efbdbbab6dce2690a5": "e7a47ce596bc0369ad433cf4734ce5e4",
".git/objects/6c/1262e75f1ffb1d16bac40d9711f957c0c4592b": "b6fee10f8f5f793e616e2aaad38929c6",
".git/objects/6c/a12fc1109ac773bf234170e0d31cd0dd4b893c": "620ac527fb55fc9323e64e94497eb356",
".git/objects/6e/49b7e1298fab3e38f758db7426e0b270ca4173": "102a09743d63a3793ebd296cd576a17f",
".git/objects/6f/fbacc5e546e66bc324f8dc5bdfbbbfb05e4f0e": "2cd384d99cb80d8cd4648e27a128cb8f",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/cef9f12661d5b82f8be20e03811dfa19207967": "172b2c8fc35c33f69ebab03c5248f1b0",
".git/objects/81/c2a9917c58d5c9d24c55b0793fb11e20cf9397": "7c2d9b0b3d1d1851c7baebfef84b5e5a",
".git/objects/86/50bc190b65d22cccb5660ac7eef6e3201c055a": "9080c08cd950423150f7e855edb6e83f",
".git/objects/87/8b399cc4827cd9a99c03a71fe07ab52a54d24d": "4e2ae5fcf650db5e2beb9ff34594aee8",
".git/objects/88/b740eb2318759e1505cc1130fcd50f76bb4535": "4c67e3d57d782f8664e4fd5d8e2f459d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/00fe9c59a529239aa7765078ffc6ea5d4c255d": "73e5a24158bb28c2cf2fc518c107017e",
".git/objects/89/4c37a8858fc9ed62ae046f21946dc3ead4b860": "f9193c13a8cb3b90a426b24f624c62b7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/af8e07350bf901a693dba8b33be82e5e168e17": "4cd9e39f7d2f4ce5a64f86376b002f84",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/a20794b5ffce39e3e0350fba1a4c52a4964600": "ee55d961f7f5766d62d1638da4f1cbca",
".git/objects/9a/328775c17f3bd36da7dfffc1a37d69371bdeca": "79054b3d891e0eba365b620b4c25309b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/3b2b52c1f5876e27cee52a1afe3996875ca6aa": "248db30adcf5bd2ed06b3484b4ba08e9",
".git/objects/a0/32dbf35dc9dfb5893e0c3f3c2ab07351e55b2e": "194a0ca7471129a2fdc78749015e6f64",
".git/objects/a6/5755b428bba980ea48654f53766d40bd65025e": "6894d3a263fe48b0bc535a3a81abbb95",
".git/objects/a8/457c7d69b0d4b83626f51a5eadd878abfea10f": "212f1292e286d09a35aab1858735a989",
".git/objects/aa/2c89574135c36de37b3b9b598189a5d0af33f5": "b36601b1959184c325750b793242f1a6",
".git/objects/b4/6cf70c9bbd5f9e9dd019edbc693c94a66fa018": "add9d04629008cc01eec1f95be01432c",
".git/objects/b6/375fa63ca3ddbfbb07bbfa51721f508ceedc8b": "2905f817c7cb60edfd13b5c1287e59ab",
".git/objects/b7/430579b848e3a03766073eaae593f74fe47330": "904fc6e6875479f9fccbbb3cedf3c12c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bf/f7ed24861629d32ab83fa8a4045e88b5d4cbc6": "9fcf590e528b567dbedeb6c7bf971fa2",
".git/objects/c3/fbd4c80e68acc6619dbac3d20a0959ed49f3ac": "600aab3e7dcaeb79a5a79fe2fc90b532",
".git/objects/c7/413504553347355ae19da653894ecb593be0c8": "628e3e0515816511250b144e1a7eb4b6",
".git/objects/c8/05a0416f009f1d0a8fd629b134c2448cef6bc5": "7ee2d5637ce7dc7de06293cdd6951144",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/5c683940509af9ed0e70dd4c6d474a3fb8041f": "02b93cc3663266b8084c3d12f8b8b6e9",
".git/objects/d4/16a7b7bedda9306b35f6aa95b8ed9ab1281749": "6425799b768854be36615a5f7c59c383",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/2682274f9731978c6b67e65e3feab4df027d53": "cb915317a74b0d1da1bd775a609495b4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9c9710ceeef2b5300ccc689bc179676b4a6f54": "023e5bdc370405a210a848dee75beb1a",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/726e1922f5eb478d5f4c14dff93cafad5b24eb": "5c310621baaa506de91dae961b49a830",
".git/objects/da/1c6daceeb6c62834d726a20cace55d0752153e": "9ef803060353af9410bc06c57d057118",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/67281fc929ef85dacc6450bff4de55cb95cbd6": "3fb53f715a4937b390b364aec98bc843",
".git/objects/dd/8c8819dfdedc3a9cf518b35c1ce71449dd8c25": "d8026da3122c3cd8253993f388ef27c3",
".git/objects/dd/b2cd914a86d97c88e94343becbf783e8122065": "41c4bf905934ee2e03fa7ff52ef6680d",
".git/objects/de/262cf6db64f4c6a318695dc08bfed7ec1211d0": "e313210157c2314cef625883f7529d08",
".git/objects/df/ca96ce6253745657dadfcc90631ecc522f2379": "2ef6630505805fe6d737e5aab0b69531",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e7/1ccfc5c525892804619aaa16fd526b2a80da93": "0733df0b6314ca2e74c4cafec67ca716",
".git/objects/e8/0ed1e8bd988c6211632802501595a10179c251": "45867ff53067e16509738bee7e107fec",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c2801bed395798cf1c00901cefac3baac68e65": "0fffb052bbd4ee0b98f043ff971f3128",
".git/objects/ef/3969d59bf9fe5c2697627c215dffa1b63fae71": "54fe92d06929dc50d47644635e1b4f96",
".git/objects/f0/6ba4028d24febe146c4d04cdefc9876c0f4455": "4086b02c7786a34e19a5e229453a9194",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/2a42a9b4ed7643aa22305e61bf0b684b81c24e": "7875d6ec167ad3e4d6c30e5e700b4e62",
".git/objects/pack/pack-df483292a607c9339ae27c8be3d2f7dccf8add90.idx": "e345f6fed4b3424f1d3356941ab42b43",
".git/objects/pack/pack-df483292a607c9339ae27c8be3d2f7dccf8add90.pack": "9fe7760763ca5d5fdca5b4c46ac61c3b",
".git/objects/pack/pack-df483292a607c9339ae27c8be3d2f7dccf8add90.rev": "85e92cc245e9bb878ada80148f038b63",
".git/refs/heads/main": "c1125e068324313a843d0ce10c0e70b0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d718e3cacf5914037b5cc7cc16a15fe1",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2ce267735b12436491c273ddc1fc9421",
"assets/NOTICES": "e95b18d11184dacf4d7e36a13a0fe5fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0f6ec008771ae25175ed6e46a4b0424f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "760ad7e023db05522b9afc2dade4d574",
"/": "760ad7e023db05522b9afc2dade4d574",
"main.dart.js": "4f21521753c717ce9abcae3a5fad3e77",
"manifest.json": "94a022316d80acf21ad9e0015788957e",
"version.json": "b46b99421755cad2ed6a50b2ab5aa5bc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

import { ref } from 'vue';
import { u as useFetch } from './fetch-DXSGE_KZ.mjs';
import { d as defineStore, a as useCookie, b as baseUrl } from './server.mjs';

const useBlocksStore = defineStore("Blocks", () => {
  const blocks = ref([]);
  const currentBlock = ref({});
  const getBlocks = async () => {
    const accessToken = useCookie("token");
    const { data } = await useFetch(baseUrl + "/auth/block", {
      headers: {
        "Content-Type": "application/json",
        access_token: accessToken.value
      }
    }, "$yxNdIdkj78");
    blocks.value = data.value.data.data;
  };
  const addNewBlock = async (data) => {
    const accessToken = useCookie("token");
    const response = await $fetch(baseUrl + `/auth/block`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        access_token: accessToken.value
      },
      body: data
    });
    await getBlocks();
    return response;
  };
  const editBlock = async (data) => {
    const accessToken = useCookie("token");
    const response = await $fetch(baseUrl + `/auth/block/${data["id"]}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        access_token: accessToken.value
      },
      body: data
    });
    await getBlocks();
    return response;
  };
  const deleteBlock = async (data) => {
    const accessToken = useCookie("token");
    let response = "";
    try {
      response = await $fetch(baseUrl + `/auth/block/${data["id"]}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          access_token: accessToken.value
        }
      });
    } catch (error) {
      response = { ...error };
    }
    await getBlocks();
    return response;
  };
  return {
    blocks,
    currentBlock,
    getBlocks,
    addNewBlock,
    editBlock,
    deleteBlock
  };
});

export { useBlocksStore as u };
//# sourceMappingURL=blocks-store-CY-29APJ.mjs.map

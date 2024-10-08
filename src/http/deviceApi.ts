import { $host, $authHost} from './index';
export const createType = async (type: any) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createBrand = async (type: any) => {
  const { data } = await $authHost.post('api/brand', type);
  return data;
};

export const fetchBrand = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createDevice = async (device: any) => {
  const { data } = await $authHost.post('api/device', device);
  return data;
};

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get('api/device', {
    params: {
      typeId,
      brandId,
      page,
      limit
    }
  });
  return data;
};

export const fetchOneDevices = async (id: any) => {
  const { data } = await $host.get(`api/device/${id}`);
  return data;
};

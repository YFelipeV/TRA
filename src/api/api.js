export const getPost = async () => {
  const response = await fetch(
    "http://10.185.80.105:3000/admin/conductoresEnServicio"
  );
  const data = response.json();
  return data;
};

export const getConductores = async () => {
  const response = await fetch(
    "http://10.185.80.105:3000/admin/conductoresDis"
  );
  const data = response.json();
  return data;
};

export const getSolicitudes = async () => {
  const response = await fetch(
    "http://10.185.80.105:3000/admin/solicitudesPendiente"
  );
  const data = response.json();
  return data;
};

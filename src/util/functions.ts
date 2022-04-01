export const calculateMidpoint = (coords: { lat: number; lng: number }[]) => {
  const cartesian = coords.map(({ lat, lng }) => {
    let lat_rad = (lat * Math.PI) / 180;
    let lng_rad = (lng * Math.PI) / 180;
    return {
      x: Math.cos(lat_rad) * Math.cos(lng_rad),
      y: Math.cos(lat_rad) * Math.sin(lng_rad),
      z: Math.sin(lat_rad),
    };
  });

  const avg_x = cartesian.reduce((acc, { x }) => acc + x, 0) / cartesian.length;
  const avg_y = cartesian.reduce((acc, { y }) => acc + y, 0) / cartesian.length;
  const avg_z = cartesian.reduce((acc, { z }) => acc + z, 0) / cartesian.length;

  const lng = (Math.atan2(avg_y, avg_x) * 180) / Math.PI;
  const hyp = Math.sqrt(avg_x * avg_x + avg_y * avg_y);
  const lat = (Math.atan2(avg_z, hyp) * 180) / Math.PI;

  return { lat, lng };
};

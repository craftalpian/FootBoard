export const countLeague = ({
  country_id,
  data,
}: {
  country_id: string;
  data: any[];
}): number => {
  return (
    data?.filter(
      ({ country_id: country_id_data }) => country_id_data === country_id
    ).length || 0
  );
};

import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useGetChannels } from "../API";
import { ChannelList, Header } from "../components";

export function MainPage() {
  const {
    isError,
    isLoading,
    isSuccess,
    updateChannels,
    getChannels,
    channels,
    errorMessage,
    filteredChannels,
  } = useGetChannels();

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <>
      <Header updateChannels={updateChannels} />
      {isLoading && (
        <TailSpin height="80" width="80" color="#1A1A1A" visible={true} />
      )}
      {isSuccess && (
        <ChannelList
          channels={filteredChannels.length ? filteredChannels : channels}
        />
      )}
      {isError && <h2>{errorMessage}</h2>}
    </>
  );
}

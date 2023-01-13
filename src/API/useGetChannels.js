import { useState } from "react";
import { URL } from "../const/const";

export function useGetChannels() {
  let [isLoading, setLoading] = useState(false);
  let [isError, setError] = useState(false);
  let [isSuccess, setSecces] = useState(false);
  let [channels, setChannels] = useState();
  let [errorMessage, setErrorMessage] = useState();
  let [filteredChannels, setFilteredChannels] = useState([]);

  function getChannels() {
    setLoading(true);
    setError(false);
    setSecces(false);

    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        setChannels(response.channels);
        setSecces(true);
      })
      .then(() => {})
      .catch((e) => {
        setError(true);
        setErrorMessage(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function updateChannels(searchParams) {
    const regExp = new RegExp(searchParams, "gui");
    setFilteredChannels([
      ...channels.filter((channel) => channel.name_ru.match(regExp)),
    ]);
  }

  return {
    isError,
    isLoading,
    isSuccess,
    getChannels,
    updateChannels,
    channels,
    errorMessage,
    filteredChannels,
  };
}

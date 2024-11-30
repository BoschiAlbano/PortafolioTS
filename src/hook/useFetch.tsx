import { AdapterFormulario, AdapterFormulariotype } from "@/adapter/formulario";
import { useState, useEffect, useCallback } from "react";

interface FetchOptions {
    method?: "GET" | "POST";
    body?: any;
    headers?: Record<string, string>;
    manual?: boolean;
}

export function useFetch(url: string, options: FetchOptions = {}) {
    const [data, setData] = useState<AdapterFormulariotype>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [controller, setController] = useState<null | AbortController>(null);

    const {
        method = "GET",
        body = null,
        headers = {},
        manual = false,
    } = options;

    const executeFetch = useCallback(() => {
        setLoading(true);
        setError(null);

        const abortController = new AbortController();
        setController(abortController);

        const fetchOptions: RequestInit = {
            method,
            signal: abortController.signal,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        };

        if (body && method === "POST") {
            fetchOptions.body = JSON.stringify(body);
        }

        fetch(url, fetchOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                setData(AdapterFormulario(json));
                return json;
            })
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("Cancelled request");
                } else {
                    setError(error.message || error.toString());
                }
                throw error;
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url, method, body, headers]);

    useEffect(() => {
        if (!manual) {
            executeFetch();
        }

        // Limpiar la solicitud al desmontar el componente
        // return () => {
        //     if (controller) {
        //         controller.abort();
        //     }
        // };
    }, [manual, executeFetch]);

    return {
        data,
        loading,
        error,
        executeFetch,
    };
}

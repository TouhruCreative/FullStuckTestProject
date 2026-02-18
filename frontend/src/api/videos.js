const API_URL = "http://127.0.0.1:8000/api/videos/";

export async function getVideos() {
    const res = await fetch(API_URL);
    if(!res.ok) throw new Error("Error");
    return res.json();
}

export async function createVideos(data) {
    const res = await fetch(API_URL,
        {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data),
        }
    );
    if(!res.ok) throw new Error("Error");
    return res.json();
}

export async function updateVideos() {
    const res = await fetch(`${API_URL}${id}/`,
        {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data),
        }
    );
    if(!res.ok) throw new Error("Error");
    return res.json();
}

export async function deleteVideos() {
    const res = await fetch(`${API_URL}${id}/`,
        {method: "DELETE"}
    );
    if(!res.ok) throw new Error("Error");
}
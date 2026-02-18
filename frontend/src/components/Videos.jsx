import { useEffect, useState } from "react";
import {
    getVideos,
    createVideo,
    updateVideo,
    deleteVideo,
} from "../api/videos";

function Videos() {
    const [videos, setVideos] = useState([]);
    const [title, setTitle] = useState("");
    const [channel, setChannel] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadVideos();
    }, []);

    async function loadVideos() {
        const data = await getVideos();
        setVideos(data);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (editingId) {
            const updated = await updateVideos(editingId, {
                title,
                channel,
            });

            setVideos(
                videos.map(v =>
                    v.id === editingId ? updated : v
                )
            );

            setEditingId(null);
        } else {
            const newVideo = await createVideos({
                title,
                channel,
            });

            setVideos([...videos, newVideo]);
        }

        setTitle("");
        setChannel("");
    }

    async function handleDelete(id) {
        await deleteVideos(id);
        setVideos(videos.filter(v => v.id !== id));
    }

    function handleEdit(video) {
        setEditingId(video.id);
        setTitle(video.title);
        setChannel(video.channel);
    }

    return (
        <div>
            <h2>YouTube Videos</h2>

            <form onSubmit={handleSubmit}>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Video title"
                />

                <input
                    value={channel}
                    onChange={e => setChannel(e.target.value)}
                    placeholder="Channel name"
                />

                <button type="submit">
                    {editingId ? "Update" : "Create"}
                </button>
            </form>

            <ul>
                {videos.map(video => (
                    <li key={video.id}>
                        {video.title} — {video.channel}

                        <button onClick={() => handleEdit(video)}>
                            Edit
                        </button>

                        <button
                            onClick={() => handleDelete(video.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Videos;

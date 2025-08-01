<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\SongResourceCollection;
use App\Models\Album;
use App\Models\User;
use App\Repositories\SongRepository;
use Illuminate\Contracts\Auth\Authenticatable;

class AlbumSongController extends Controller
{
    /** @param User $user */
    public function __construct(
        private readonly SongRepository $songRepository,
        private readonly Authenticatable $user
    ) {
    }

    public function index(Album $album)
    {
        return SongResourceCollection::make($this->songRepository->getByAlbum($album, $this->user));
    }
}

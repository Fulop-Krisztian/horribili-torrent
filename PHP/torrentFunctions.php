<?php
require 'vendor/autoload.php';

use SandFox\Bencode\Bencode;

// Function to get the size of the files in a torrent
function getTorrentSize($torrentPath) {
    $torrentContent = file_get_contents($torrentPath);
    $decodedTorrent = Bencode::decode($torrentContent);

    // Assuming a standard structure where files are listed in the 'info' key
    if (isset($decodedTorrent['info']['files'])) {
        $totalSize = 0;
        foreach ($decodedTorrent['info']['files'] as $file) {
            $totalSize += $file['length'];
        }
        return $totalSize;
    } elseif (isset($decodedTorrent['info']['length'])) {
        // Single file torrent
        return $decodedTorrent['info']['length'];
    } else {
        return 0; // Unable to determine size
    }
}
?>

<?php
if (!function_exists('vite')) {
    function vite(string $path): string
    {
        $devServer = 'http://localhost:5173';

        // Check if we are in development mode
        if (is_vite_dev_server_running($devServer)) {
            return $devServer . '/' . $path;
        }

        // Path to the Vite manifest file
        $manifestPath = FCPATH . 'resources/.vite/manifest.json';

        // Check if the manifest file exists
        if (file_exists($manifestPath)) {
            $manifest = json_decode(file_get_contents($manifestPath), true);

            // Ensure the path exists in the manifest
            if (isset($manifest[$path])) {
                return base_url('resources/' . $manifest[$path]['file']);
            }
        }

        // Fallback in case the manifest is missing or the path is not found
        return base_url('resources/' . $path);
    }
}
/**
 * Check if the Vite dev server is running
 */
function is_vite_dev_server_running(string $url): bool
{
    $host = parse_url($url, PHP_URL_HOST);
    $port = parse_url($url, PHP_URL_PORT) ?? 5173;

    $connection = @fsockopen($host, $port, $errno, $errstr, 0.2);

    if ($connection) {
        fclose($connection);
        return true;
    }

    return false;
}

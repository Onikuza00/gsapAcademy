# <p align="center"><code>◢ 🌐 SYSTEM_CORE :: BACKEND_MASTER_GUIDE ◣</code></p>

<p align="center">
  <code><b>[ v1.0.0 ]</b></code> &nbsp; <code><b>[ AUTH: JWT ]</b></code> &nbsp; <code><b>[ ENV: PROD ]</b></code>
</p>

<div style="height: 1px; background: linear-gradient(to right, transparent, #00f2fe, transparent); margin: 1.5rem 0;"></div>

## 📑 00 // INDEX_TERMINAL

<div style="background: rgba(0, 0, 0, 0.2); border-left: 2px solid #00f2fe; padding: 1.5rem; margin-bottom: 2.5rem; font-family: 'JetBrains Mono', 'Fira Code', monospace;">
  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; opacity: 0.8;">
    <span style="color: #00f2fe;">◢</span>
    <span style="letter-spacing: 2px; font-size: 0.8rem; color: #fff;">SYSTEM_MANIFEST :: V1.0.0</span>
    <div style="flex-grow: 1; height: 1px; background: linear-gradient(to right, rgba(0, 242, 254, 0.3), transparent);"></div>
  </div>

  <div style="display: flex; flex-wrap: wrap; gap: 0.8rem;">
    <a href="#01-vision" style="text-decoration: none; color: #fff; font-size: 0.85rem; padding: 0.4rem 0.8rem; border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 4px; transition: 0.2s; background: rgba(0, 242, 254, 0.02);">
      <span style="color: #00f2fe; margin-right: 5px;">01.</span> VISION_CORE
    </a>
    <a href="#02-servicios" style="text-decoration: none; color: #fff; font-size: 0.85rem; padding: 0.4rem 0.8rem; border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 4px; transition: 0.2s; background: rgba(0, 242, 254, 0.02);">
      <span style="color: #00f2fe; margin-right: 5px;">02.</span> SERVICES_LAYER
    </a>
    <a href="#03-seguridad" style="text-decoration: none; color: #fff; font-size: 0.85rem; padding: 0.4rem 0.8rem; border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 4px; transition: 0.2s; background: rgba(0, 242, 254, 0.02);">
      <span style="color: #00f2fe; margin-right: 5px;">03.</span> SHIELD_PROTOCOL
    </a>
    <a href="#04-controladores" style="text-decoration: none; color: #fff; font-size: 0.85rem; padding: 0.4rem 0.8rem; border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 4px; transition: 0.2s; background: rgba(0, 242, 254, 0.02);">
      <span style="color: #00f2fe; margin-right: 5px;">04.</span> API_ENDPOINTS
    </a>
    <a href="#05-datos" style="text-decoration: none; color: #fff; font-size: 0.85rem; padding: 0.4rem 0.8rem; border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 4px; transition: 0.2s; background: rgba(0, 242, 254, 0.02);">
      <span style="color: #00f2fe; margin-right: 5px;">05.</span> DATA_NUCLEUS
    </a>
    <a href="#06-flujo" style="text-decoration: none; color: #fff; font-size: 0.85rem; padding: 0.4rem 0.8rem; border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 4px; transition: 0.2s; background: rgba(0, 242, 254, 0.02);">
      <span style="color: #00f2fe; margin-right: 5px;">06.</span> DEV_PIPELINE
    </a>
    <a href="#07-qa" style="text-decoration: none; color: #fff; font-size: 0.85rem; padding: 0.4rem 0.8rem; border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 4px; transition: 0.2s; background: rgba(0, 242, 254, 0.02);">
      <span style="color: #00f2fe; margin-right: 5px;">07.</span> QA_LAB
    </a>
  </div>
</div>

<br>

<div style="background: rgba(0, 242, 254, 0.05); border-left: 4px solid #00f2fe; border-radius: 0 8px 8px 0; padding: 1.5rem; margin-bottom: 2rem;">

## <a id="01-vision"></a>🚀 01 // VISIÓN GENERAL

Bienvenido a la **Guía Maestra del Backend**. Este documento centraliza el conocimiento técnico necesario para mantener y evolucionar el motor de **7Vision**.

Garantizamos un ecosistema seguro y escalable, donde cada decisión arquitectónica tiene un propósito claro de eficiencia y protección.

> [!NOTE]
> Fusión progresiva con la _Guía del Servidor_ y la _Auditoría Técnica_ en curso.

</div>

<div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">

## <a id="02-servicios"></a>⚙️ 02 // SERVICIOS (BUSINESS_LOGIC)

Aquí reside la inteligencia real de **7Vision**. Los servicios procesan datos, realizan cálculos complejos y se comunican con APIs externas, manteniendo los controladores limpios y legibles.

<!-- SERVICIO: TMDB_SERVICE -->
<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 01 :: TMDB_SERVICE (The Movie Data Base API) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Infraestructura y Dependencias:</b> Para garantizar un servicio robusto y eficiente, inyectamos interfaces clave de Symfony. La <code>CacheInterface</code> nos permite ahorrar miles de peticiones externas, mientras que <code>LoggerInterface</code> actúa como nuestra caja negra para registrar cualquier error de conexión con TMDB.
</p>

```php
use Symfony\Contracts\Cache\CacheInterface; // Ahorro de tiempo y recursos
use Symfony\Contracts\Cache\ItemInterface;  // Control de expiración de datos
use Psr\Log\LoggerInterface;                // Registro de errores crítico
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Arquitectura del Constructor:</b> Utilizamos <i>Constructor Property Promotion</i> para reducir el código repetitivo. Además, mediante el atributo <code>#[Autowire]</code>, inyectamos de forma segura la API KEY configurada en las variables de entorno, manteniendo las credenciales fuera del código fuente.
</p>

```php
public function __construct(
    private readonly HttpClientInterface $httpClient,
    private readonly LoggerInterface $logger,
    private readonly CacheInterface $cache,
    #[Autowire('%tmdb_api_key%')] // Definida en services.yaml
    private readonly string $apiKey
) {}
```

</div>

<!-- MÉTODO: BUSCAR_AMB_FILTRES -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">🔍 Método: buscarAmbFiltres()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Propósito:</b> Actúa como un motor de búsqueda híbrido. Si el usuario escribe, busca por título; si no, utiliza el motor de "Discover" para mostrar las películas más populares del momento.
</p>

```php
public function buscarAmbFiltres(?string $query): array {
    $endpoint = $query ? 'search/movie' : 'discover/movie';
    $params = ['api_key' => $this->apiKey, 'language' => 'es-ES'];
    if ($query) $params['query'] = $query;

    $response = $this->httpClient->request('GET', "https://api.themoviedb.org/3/$endpoint", ['query' => $params]);
    return $response->toArray()['results'] ?? [];
}
```

</details>

<!-- MÉTODO: FETCH_FULL_DATA -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">🌐 Método: fetchFullMovieData()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Propósito:</b> Es el corazón trilingüe de 7Vision. Realiza peticiones simultáneas para obtener detalles en Castellano, Catalán e Inglés, optimizando la carga mediante <code>append_to_response</code> para traer vídeos y actores en la misma llamada.
</p>

```php
public function fetchFullMovieData(int $tmdbId): array {
    $idiomas = ['ca' => 'ca-ES', 'es' => 'es-ES', 'en' => 'en-US'];
    foreach ($idiomas as $prefijo => $lang) {
        $respuestas["detail_$prefijo"] = $this->httpClient->request('GET', "...", [
            'query' => [..., 'append_to_response' => 'videos,credits']
        ]);
    }
    // Procesa y fusiona los 3 idiomas en un solo array estructurado
}
```

</details>

<!-- MÉTODO: LLISTA_GENERES_TRILINGUE -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">🏷️ Método: llistaGeneresTrilingue()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Propósito:</b> Genera el diccionario de categorías del sistema. Para maximizar el rendimiento, utiliza un sistema de caché de 24 horas, evitando cientos de peticiones innecesarias a TMDB.
</p>

```php
public function llistaGeneresTrilingue(): array {
    return $this->cache->get('tmdb_generes_trilingue', function (ItemInterface $item) {
        $item->expiresAfter(86400); // 1 día completo
        // ... Lógica de descarga y mapeo de géneros
    });
}
```

</details>

<!-- MÉTODO: OBTENER_TRAILER -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">🎥 Método: obtenerTrailer()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Propósito:</b> Localiza el vídeo oficial de la película en YouTube. Utiliza una lógica interna (<code>extractYoutubeTrailer</code>) para filtrar entre todos los vídeos de la API (teasers, behind the scenes, etc.) y quedarse únicamente con el tráiler oficial firmado por YouTube.
</p>

```php
public function obtenerTrailer(int $tmdbId): ?string {
    $response = $this->httpClient->request('GET', "https://api.themoviedb.org/3/movie/{$tmdbId}/videos", [
        'query' => ['api_key' => $this->apiKey]
    ]);
    return $this->extractYoutubeTrailer($response->toArray()['results'] ?? []);
}
```

</details>

<!-- MÉTODO: BUSCAR_PER_GENERE -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">🎭 Método: buscarPerGenere()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Propósito:</b> Alimentar los listados temáticos. Este método incluye una <b>lógica de paginación automática</b>: si se solicitan más de 20 resultados (estándar de TMDB), el servicio realiza múltiples peticiones secuenciales hasta alcanzar el límite deseado (ej: 60 películas), devolviendo un catálogo masivo filtrado por fecha de estreno.
</p>

```php
public function buscarPerGenere(int $genreId, int $numResults = 60): array {
    $pagesNeeded = ceil($numResults / 20);
    for ($page = 1; $page <= $pagesNeeded; $page++) {
        $response = $this->httpClient->request('GET', "...", [
            'query' => [..., 'with_genres' => $genreId, 'page' => $page]
        ]);
        $allResults = array_merge($allResults, $response->toArray()['results']);
        if (count($allResults) >= $numResults) break;
    }
    return $allResults;
}
```

</details>

- `⚙️ src/Service/TmdbService.php`
  </details>

<!-- SERVICIO: MOVIE_SYNC_SERVICE -->
<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 02 :: MOVIE_SYNC_SERVICE (ORQUESTADOR) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Centro de Operaciones (Constructor):</b> Este servicio es un orquestador que coordina múltiples repositorios y el cliente de TMDB. Utiliza el <code>EntityManagerInterface</code> para persistir los datos en la base de datos local una vez transformados.
</p>

<div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-top: 1rem; margin-bottom: 1.5rem;">
<p style="color: #00f2fe; font-weight: bold; font-size: 1rem; margin-bottom: 1rem;">
💎 PROTOCOLO: TRIPLE ESCUDO (High Fidelity UX)
</p>
<p style="color: #fff; font-size: 0.9rem; line-height: 1.6;">
Estrategia coordinada para eliminar el "efecto fantasma" y garantizar un catálogo denso en el Megamenu:
</p>
<ul style="color: #ccc; font-size: 0.85rem; line-height: 1.5;">
    <li><b>Escudo 1: Vaciado Atómico (UI):</b> Limpieza instantánea de carátulas previas al cambiar de género.</li>
    <li><b>Escudo 2: Control de Opacidad (UI):</b> Ocultación del contenedor (opacity 0) hasta que el <code>nextTick</code> de Vue confirma la carga de datos.</li>
    <li><b>Escudo 3: Umbrales Agresivos (Backend):</b> Si el género tiene menos de <b>12 películas (Frontend)</b> o <b>60 (Backend)</b>, el sistema dispara una sincronización profunda con TMDB.</li>
</ul>
</div>


```php
public function __construct(
    private readonly PeliculesRepository $repository,
    private readonly GenereRepository $genereRepository,
    private readonly ActorRepository $actorRepository,
    private readonly TmdbService $tmdbService,
    private readonly EntityManagerInterface $em
) {}
```

</div>

<!-- MÉTODO: BUSCAR_Y_SINCRONITZAR -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">🔄 Método: buscarYSincronitzar()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Propósito:</b> Gestiona la búsqueda inteligente. Utiliza parámetros opcionales (<code>?string $query</code>) para permitir búsquedas vacías (populares). Su lógica decide cuándo disparar una petición externa: si es <i>Live Search</i> (mientras se escribe o se pausa la escritura) busca siempre en TMDB si no hay resultados locales para garantizar frescura; si es búsqueda normal, sincroniza si tenemos menos de 20 películas.
</p>

```php
public function buscarYSincronitzar(?string $query, bool $isLive = false): array {
    $peliculesFinals = $this->repository->findByFiltres($query);
    // Lógica: Si es Live Search y no hay nada local, vamos DIRECTO a TMDB
    $necesitaSincronizar = (!$isLive && count($peliculesFinals) < 20) || ($isLive && count($peliculesFinals) === 0);

    if ($necesitaSincronizar) {
        $dadesNoves = $this->tmdbService->buscarAmbFiltres($query);
        // ... Carga ligera y persistencia
    }
    return $peliculesFinals;
}
```

</details>

<!-- MÉTODO: CREAR_PELICULA_LIGERA -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">⚡ Método: crearPeliculaLigera()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Propósito:</b> Inmediatez absoluta. Crea una versión básica de la película con solo los datos necesarios para el listado (título, póster, puntuación). Al no cargar actores ni trailers en esta fase, la respuesta al usuario es instantánea aunque estemos guardando datos nuevos.
</p>

```php
private function crearPeliculaLigera(array $data, array $generesLocals): Pelicules {
    $peli = new Pelicules();
    $peli->setTmdbId($data['id'])->setTitolEs($data['title']);
    // Asignación rápida de géneros pre-cargados para optimizar DB
    foreach ($data['genre_ids'] ?? [] as $gId) {
        if (isset($generesLocals[$gId])) $peli->addGenere($generesLocals[$gId]);
    }
    $this->em->persist($peli);
    return $peli;
}
```

</details>

<!-- MÉTODO: ENRIQUECER_PELICULA -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">💎 Método: enriquecerPelicula()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Propósito:</b> Solo se ejecuta cuando el usuario entra en la ficha de detalle. Descarga los trailers, mapea el reparto de actores (evitando duplicados en la BD) y sincroniza las sinopsis en los 3 idiomas. 
</p>

```php
public function enriquecerPelicula(Pelicules $peli): void {
    if ($peli->getTrailer()) return; // Idempotencia: no repetir si ya está llena
    $fullData = $this->tmdbService->fetchFullMovieData($peli->getTmdbId());
    $peli->setTitolCa(...)->setTitolEn(...)->setTrailer(...);
    // Gestión inteligente de actores para no duplicar registros
    foreach ($fullData['actors'] as $actorData) { ... }
}
```

</details>

<!-- MÉTODO: SINCRONITZAR_PER_GENERE -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">🏷️ Método: sincronitzarPerGenere()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Propósito:</b> Especialización. Permite que cuando un usuario explora una categoría (ej: "Terror"), el sistema asegure que siempre hay al menos 60 títulos disponibles, disparando una sincronización masiva por género si el catálogo local es insuficiente.
</p>

```php
public function sincronitzarPerGenere(Genere $genere): array {
    $peliculesFinals = $this->repository->findByGenere($genere, 60);
    if (count($peliculesFinals) < 60) {
        $dadesNoves = $this->tmdbService->buscarPerGenere($genere->getTmdbId());
        // ... Sincronización masiva de resultados
    }
    return array_slice($peliculesFinals, 0, 60);
}
```

</details>

- `⚙️ src/Service/MovieSyncService.php`
  </details>

<!-- SERVICIO: FILE_SERVICE -->
<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 03 :: FILE_SERVICE (Gestión de Archivos Segura) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Infraestructura de Archivos:</b> Para gestionar la subida de avatares y carátulas, utilizamos herramientas nativas de Symfony que garantizan la compatibilidad y seguridad de los binarios.
</p>

```php
use Symfony\Component\HttpFoundation\File\Exception\FileException; // Captura de errores de disco
use Symfony\Component\HttpFoundation\File\UploadedFile;           // Objeto que representa el archivo subido
use Symfony\Component\String\Slugger\SluggerInterface;           // Herramienta para limpiar nombres
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Sanitización (Constructor):</b> Inyectamos el <code>SluggerInterface</code> para transformar nombres de archivos con espacios o caracteres especiales en nombres "URL-friendly" y seguros para el sistema de archivos Linux/Windows.
</p>

```php
public function __construct(
    private SluggerInterface $slugger,
) {}
```

</div>

<!-- MÉTODO: UPLOAD -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">📤 Método: upload()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Propósito:</b> Procesa un archivo subido y lo guarda en el disco. Sigue una estrategia de <b>Invariabilidad y Unicidad</b>:
<br>1. <b>Slugging:</b> Limpia el nombre original.
<br>2. <b>Randomización:</b> Añade un <code>uniqid()</code> para que si dos usuarios suben "foto.jpg", no se sobrescriban.
<br>3. <b>Blindaje:</b> Usa un bloque <code>try-catch</code> específico para errores de permisos o disco (<code>FileException</code>).
</p>

```php
public function upload(UploadedFile $file, string $targetDirectory): string {
    $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
    $safeFilename = $this->slugger->slug($originalFilename);
    $newFilename = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

    try {
        $file->move($targetDirectory, $newFilename);
    } catch (FileException $e) {
        throw new \Exception('Error de disco: ' . $e->getMessage());
    }
    return $newFilename;
}
```

</details>

- `⚙️ src/Service/FileService.php`
  </details>

<!-- SERVICIO: AI_SERVICE -->
<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 04 :: AI_SERVICE (7Vision-AI) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Infraestructura Neuronal:</b> Este servicio conecta 7Vision con el modelo <code>Llama-3.3-70b</code> a través de la API de Groq. Está diseñado para actuar como un recomendador inteligente que "conoce" nuestro catálogo local de películas y los gustos del usuario.
</p>

```php
private const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
private const MODEL = 'llama-3.3-70b-versatile'; // Modelo Cyber-Power
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Personalización Dinámica:</b> El método <code>getRecommendation</code> acepta ahora un objeto opcional <code>Usuari</code>. Si el usuario está logueado, inyectamos en el prompt su nombre, su género favorito y sus películas preferidas, permitiendo que 7Vision-AI ofrezca una experiencia 100% a medida.
</p>

```php
public function getRecommendation(string $userPrompt, ?Usuari $user = null): string {
    if ($user) {
        $userContext = "Hablas con " . $user->getUsername() . ". Le gusta el " . $user->getGenere();
        // ... Inyección en el prompt del sistema
    }
}
```

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>El ADN de 7Vision-AI (System Prompt):</b> El <code>systemPrompt</code> es el conjunto de instrucciones maestras que definen la personalidad y el conocimiento de la IA. No es un texto estático, sino un documento dinámico que fusiona: 
<br>1. <b>Personalidad:</b> Tono técnico-amigable.
<br>2. <b>Contexto:</b> El catálogo pre-filtrado de películas.
<br>3. <b>Usuario:</b> Datos reales del perfil logueado.
</p>
</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Reglas de Protocolo Estrictas:</b> Para garantizar la seguridad y la UX, la IA opera bajo un "cortafuegos" de reglas innegociables:
</p>
<ul style="color: #ccc; font-size: 0.85rem; line-height: 1.6;">
    <li>🚫 <b>No Hallucinations:</b> Prohibido inventar películas o datos fuera del catálogo.</li>
    <li>🔒 <b>Prompt Security:</b> Bloqueo de intentos de revelación de instrucciones internas.</li>
    <li>🎬 <b>No Spoilers:</b> Resúmenes técnicos que terminan antes del clímax.</li>
    <li>📏 <b>Brevidad:</b> Máximo 3 frases para mantener la agilidad del chat.</li>
    <li>🎨 <b>Markdown UI:</b> Uso de negritas para títulos y cursivas para actores.</li>
    <li>⚡ <b>Formato ASSET_ID:</b> Inserción obligatoria del ID al final para vinculación con el Frontend.</li>
</ul>
</div>

<!-- MÉTODO: GET_RECOMMENDATION -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; color: #4facfe;">🧠 Método: getRecommendation()</summary>
<br>
<p style="color: #fff; font-size: 0.9rem;">
<b>Motor RAG (Retrieval-Augmented Generation) con Contexto de Usuario 🚀:</b> Vision-AI no solo lee el catálogo, sino que ahora es consciente de con quién está hablando. El flujo ha sido optimizado:
<br>1. <b>Identificación de Identidad:</b> Recibe el objeto <code>?Usuari $user</code>. Si está presente, el sistema extrae su <i>username</i>, <i>género preferido</i> y <i>películas favoritas</i>.
<br>2. <b>Inyección de Contexto Social:</b> Estos datos se fusionan en el <code>systemPrompt</code>, permitiendo que la IA use un tono personalizado (ej: saludar por el nombre) y priorice recomendaciones que encajen con el perfil del usuario.
<br>3. <b>Búsqueda de Relevancia:</b> Utiliza <code>findForAiContext</code> para buscar palabras clave en títulos, actores y géneros en nuestra base de datos local.
<br>4. <b>Filtro de redundancia:</b> Al conocer los favoritos del usuario, la IA puede evitar recomendar películas que el usuario ya ha marcado como "vistas" o "preferidas", o usarlas para buscar títulos similares.
<br>5. <b>Respuesta Final:</b> Envía todo este contexto enriquecido a Llama-3 para generar la recomendación final con formato <code>ASSET_ID</code>.
</p>

```php
public function getRecommendation(string $userPrompt, ?Usuari $user = null): string {
    // 1. Invisible Search: Filtramos el catálogo por relevancia
    $relevantMovies = $this->movieRepository->findForAiContext($userPrompt, 45);

    // 2. Definimos la personalidad de Vision-AI
    $systemPrompt = "Eres Vision-AI... REGLAS DE PROTOCOLO: No spoilers, no inventar datos, seguridad de prompt y formato final ASSET_ID obligatorio.";

    // 3. Ejecución: Respuesta directa y formateada (ASSET_ID)
    return $aiResponse;
}
```

</details>

- `⚙️ src/Service/AiService.php`
  </details>

</div>

<div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">

## <a id="03-seguridad"></a>🛡️ 03 // SECURITY :: SHIELD_PROTOCOL

Protocolo de defensa en profundidad diseñado para garantizar la integridad absoluta del sistema mediante múltiples capas de verificación.

<br>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 01 :: CONTROL DE ACCESO ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🎭 Autenticación de Doble Cara (Dual-Auth)</summary>
<br>
El sistema opera con dos motores de seguridad independientes y aislados. El panel de administración utiliza sesiones blindadas, mientras que la API utiliza tokens JWT sin estado. Esta arquitectura dual garantiza que una brecha en una cara no afecte a la integridad de la otra.

```yaml
# config/packages/security.yaml
firewalls:
    admin: { pattern: ^/admin, ... }
    api: { pattern: ^/api, ... }
```

- `⚙️ config/packages/security.yaml`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🎫 Llaves Digitales (JWT)</summary>
<br>
Cuando un usuario inicia sesión desde la aplicación web o móvil, el servidor genera un "ticket" digital firmado y cifrado. Este ticket se adjunta automáticamente a todas las peticiones futuras para que el sistema reconozca al usuario sin pedir la contraseña cada vez.

```yaml
api:
    pattern: ^/api
    stateless: true
    jwt: ~
```

- `📍 src/Controller/Api/`
- `⚙️ config/packages/security.yaml`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🛡️ Escudo de Administración (CSRF)</summary>
<br>
Marca invisible en los formularios del panel de control para asegurar que cualquier cambio proviene realmente del administrador y no de un enlace malicioso externo.

```yaml
main:
    form_login:
        enable_csrf: true
```

- `📍 src/Controller/Admin/`
- `⚙️ config/packages/security.yaml`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">👤 Control de Permisos (RBAC)</summary>
<br>
Verificación de rangos (Admin/User) antes de conceder acceso a cualquier funcionalidad, asegurando que la superficie de ataque esté limitada por roles.

```php
#[IsGranted('ROLE_ADMIN')]
```

- `📍 Atributos #[IsGranted]`
    </details>
    </details>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 02 :: PROTECCIÓN DE DATOS ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🔐 Cifrado Argon2id</summary>
<br>
Es el algoritmo de hashing más avanzado. A diferencia de otros, Argon2id requiere una gran cantidad de memoria y tiempo de procesador para ser calculado. Esto hace que sea astronómicamente caro y lento para un atacante intentar descifrar claves usando tarjetas gráficas (GPU) o superordenadores.

```yaml
App\Entity\Usuari:
    algorithm: argon2id
```

- `📍 src/Entity/Usuari.php`
- `⚙️ config/packages/security.yaml`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">📦 Symfony Secrets</summary>
<br>
Contenedor cifrado donde residen las claves de APIs externas (como TMDB) y credenciales de base de datos, garantizando que nunca estén en texto plano en el servidor.

```bash
php bin/console secrets:set TMDB_API_KEY
```

- `📍 src/Service/TmdbService.php`
- `⚙️ config/secrets/`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🌐 Política de CORS</summary>
<br>
Restricción estricta de orígenes que define qué dominios web externos tienen permiso para comunicarse con nuestro backend, bloqueando cualquier intento de robo de datos desde sitios no autorizados.

```yaml
# config/packages/nelmio_cors.yaml
allow_origin: ["%env(CORS_ALLOW_ORIGIN)%"]
```

- `⚙️ config/packages/nelmio_cors.yaml`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🧠 Serialización y Blindaje Anti-500</summary>
<br>
Protocolo de prevención de fallos de memoria y referencias circulares. Al segregar estrictamente los <code>Groups</code> de serialización, evitamos que el servidor entre en bucles infinitos (Usuari -> Pelicula -> Usuari) que agotan la RAM y provocan el Error 500.

#### Estrategia Atómica

- <b>Segregación:</b> Las entidades solo exponen datos de sus relaciones si se invoca un grupo específico (ej. <code>movie:read</code>).
- <b>Hash de Sesión:</b> Uso de <code>crc32c</code> para la integridad de la contraseña en memoria sin exponer el hash real.

```php
// Ejemplo de blindaje en Entidad
#[Groups(['movie:read'])]
private $titolEs; // Solo sale si pedimos pelis

// Sin grupo => El serializador lo ignora y rompe el bucle
private $propietari;
```

- `📍 src/Entity/Usuari.php` y `src/Entity/Pelicules.php`
    </details>
    </details>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 03 :: DEFENSA CONTRA ABUSOS ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">⚡ Anti-DOS & Rate Limiting Global</summary>
<br>
Sistema de control de inundación que limita la frecuencia de peticiones en todos los puntos críticos del sistema. Protege la infraestructura contra ataques de denegación de servicio (DOS) y garantiza la disponibilidad para usuarios legítimos.

```yaml
# config/packages/rate_limiter.yaml
api_login:
    policy: "fixed_window"
    limit: 5
```

- `⚙️ config/packages/rate_limiter.yaml`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🚦 Escudo de Cuota (Proxy Protection)</summary>
<br>
Limitación específica de búsquedas (10/min) para blindar nuestra cuota internacional de la API de películas, evitando el agotamiento accidental o malintencionado del servicio.

```yaml
api_movie_search:
    policy: "token_bucket"
    limit: 10
```

- `📍 src/Controller/Api/MovieApiController.php`
- `⚙️ config/packages/rate_limiter.yaml`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">📏 Validación de Carga (Payload Search)</summary>
<br>
Restricción estricta de **20 caracteres** en los términos de búsqueda. Previene ataques de saturación donde un atacante envía textos inmensos para colapsar la memoria del servidor procesando búsquedas infinitas.

```php
if (strlen($query) > 20) {
    return $this->json(['error' => 'Payload demasiado extenso'], 400);
}
```

- `📍 src/Controller/Api/MovieApiController.php`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🛑 Login Throttling</summary>
<br>
Sistema de bloqueo reactivo que detecta intentos fallidos sucesivos desde una misma IP y la congela temporalmente, neutralizando ataques de diccionario y fuerza bruta.

```yaml
main:
    login_throttling:
        max_attempts: 5
```

- `⚙️ config/packages/security.yaml`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🍯 Honeypot (Trampa de Bots)</summary>
<br>
Campo invisible que, al ser rellenado por un agente automático, dispara una respuesta falsa de éxito mientras bloquea silenciosamente la incursión.

```php
if (!empty($data['email_verification_field'])) { ... }
```

- `📍 src/Controller/Api/UserApiController.php`
    </details>
    </details>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 04 :: INTEGRIDAD Y VISIBILIDAD ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">⚡ Strict Pagination (Paginación SQL)</summary>
<br>
El endpoint <code>/api/pelicules</code> intercepta la Request e impone un límite máximo de 40 entidades por página mediante el motor <code>findPaginated()</code> de Doctrine, mitigando ataques de desbordamiento de memoria por extracción masiva.
</details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🧠 Anti N+1 Protocol (Memoria Volátil)</summary>
<br>
La validación cruzada (ej. marcarFavoritos) utiliza un volcado previo a memoria extrayendo IDs en masa y evaluando con <code>in_array()</code>, lo que elimina el riesgo de colapso por saturación de consultas redundantes.
</details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🤖 Blindaje de IA (Anti-Prompt Injection)</summary>
<br>
Defensa de doble capa en el módulo de Inteligencia Artificial: validación estricta de formato y longitud (max 30) en el <code>username</code> de entrada, limpieza severa (<code>strip_tags()</code>) antes de la inyección en el LLM, y límite duro de 200 caracteres por mensaje para neutralizar el agotamiento intencionado de tokens. Todo el servicio opera encapsulado en bloques <code>try-catch</code> para garantizar tolerancia a fallos.
</details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">💎 Serialization Groups</summary>
<br>
Sistema de listas blancas que define qué datos exactos pueden viajar al exterior. Garantiza que información sensible (como emails privados o IDs internos) nunca se filtre en respuestas públicas.

```php
#[Groups(['movie:read'])]
```

- `📍 Entidades del Sistema`
    </details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🎭 Gestión Segura de Excepciones</summary>
<br>
Control uniforme de errores que oculta la arquitectura interna. Ante un fallo, el sistema devuelve un JSON estandarizado, impidiendo que un atacante obtenga pistas sobre la estructura del servidor.

```php
try { ... } catch (\Exception $e) { ... }
```

- `📍 Todos los Controladores del Sistema`
    </details>
    </details>

</div>

<div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">

## <a id="04-controladores"></a>🎮 04 // CONTROLADORES (END POINTS)

El controlador NO debe contener lógica de negocio. Su única responsabilidad es recibir la petición, llamar al servicio adecuado y devolver la respuesta. Si el controlador tiene más de 30 líneas de lógica, debe ser refactorizado a un Servicio.

<br>

<div style="background: rgba(255, 215, 0, 0.05); border: 1px solid rgba(255, 215, 0, 0.2); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<p style="color: #ffd700; font-size: 0.9rem; margin: 0;">
<b>Estructura de Navegación:</b> Dividimos los controladores en dos grandes ecosistemas: el <b>Panel de Admin</b> (Gestión interna) y la <b>API</b> (Comunicación con el cliente).
</p>
</div>

<!-- SUBSECCIÓN: ESTÁNDARES DE RESPUESTA -->
<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 01 :: ESTÁNDARES DE RESPUESTA (JSON) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Uniformidad de Errores:</b> Ante cualquier fallo, el sistema debe devolver siempre el mismo formato de JSON. Esto permite que el Frontend maneje los errores de forma global sin sorpresas.
</p>

```json
{
    "error": "Mensaje descriptivo para el usuario",
    "status": 400
}
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Uso de Serialización (Groups):</b> Controlamos qué campos se envían al exterior mediante anotaciones de grupo. El ID es fundamental para la reactividad en el Frontend.
</p>

```php
// En el controlador indicamos el grupo 'movie:read'
return $this->json($movies, 200, [], ['groups' => 'movie:read']);
```

</div>

<div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-top: 2rem;">
<p style="color: #00f2fe; font-weight: bold; font-size: 1rem; margin-bottom: 1rem;">
💎 PATRÓN: ENDPOINT MAESTRO (Data Aggregator)
</p>
<p style="color: #fff; font-size: 0.9rem; line-height: 1.6;">
<b>Problema:</b> En entornos Windows (PHP-CGI), las peticiones son secuenciales. 7 peticiones = 7 segundos.
<br><b>Solución:</b> Un solo endpoint <code>/api/home-data</code> que agrupa todo el catálogo, géneros, novedades y datos de usuario en un único round-trip.
</p>

```php
// HomeApiController.php - Ejemplo de Agregación
return $this->json([
    'catalog'   => $repo->findPaginated(1, 40),
    'novedades' => $repo->findUltimesNovedats(20),
    'genres'    => $genereRepo->findAll(),
    'user'      => $user,
], 200, [], ['groups' => ['movie:read', 'genre:read']]);
```

<p style="color: #ccc; font-size: 0.8rem; margin-top: 10px;">
<i>Resultado: Latencia reducida de 8s a <1s. Carga instantánea de la interfaz.</i>
</p>
</div>

</details>

<!-- SUBSECCIÓN: SEGURIDAD EN ENDPOINTS -->
<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 02 :: SEGURIDAD EN TIEMPO REAL ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Rate Limiting Automático:</b> Usamos el <code>RateLimiterFactory</code> para limitar cuántas veces un usuario puede llamar a un endpoint (ej: 10 búsquedas por minuto). Esto protege nuestra infraestructura y la API de TMDB.
</p>

```php
$limiter = $apiMovieSearchLimiter->create($user->getId());
if (false === $limiter->consume(1)->isAccepted()) {
    return $this->json(['error' => 'Demasiadas peticiones'], 429);
}
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Identidad del Usuario (#[CurrentUser]):</b> Obtenemos el objeto del usuario logueado de forma segura y directa mediante atributos de Symfony, eliminando la necesidad de consultas manuales al repositorio.
</p>
</div>
</details>

<!-- SUBSECCIÓN: PANEL DE ADMINISTRACIÓN -->
<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;" open>
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 03 :: PANEL DE CONTROL (ADMIN) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<!-- CONTROLADOR: USUARIO_PANEL_ADMIN -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">👤 UsuarioPanelAdminController (MODERACIÓN_TOTAL)</summary>
<br>
Este controlador es para la gestión de la comunidad. Orquesta flujos complejos que van desde el alta de usuarios hasta la moderación de contenido generado por terceros.

<br>

<!-- ENDPOINT: INDEX -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ LISTADO GENERAL [index] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/usuaris`</summary>
Recupera todos los usuarios registrados en el sistema para su gestión centralizada. Es el punto de partida para cualquier tarea de administración de perfiles.

```php
public function index(UsuariRepository $usuariRepository): Response {
    return $this->render('usuari/index.html.twig', [
        'usuaris' => $usuariRepository->findAll(),
    ]);
}
```

</details>

<!-- ENDPOINT: REGISTER/NEW -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ REGISTRO Y ALTA SEGURA [new] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/register`</summary>
Orquesta la creación de nuevos usuarios aplicando seguridad OWASP. Lo más relevante es la respuesta estructurada que enviamos: inyectamos parámetros tácticos (`ok`, `missatge`, `redirigir`) que el frontend utiliza para disparar alertas dinámicas con <b style="color: #ffcc00;">Sweet Alert</b>.

```php
return $this->render('registration/register.html.twig', [
    'usuari' => $usuari,
    'formulari' => $form->createView(),
    'ok' => true,
    'missatge' => 'El usuario se ha creado correctamente',
    'redirigir' => 'app_usuari_index'
]);
```

</details>
<!-- ENDPOINT: EDIT -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ EDICIÓN DE PERFIL [edit] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/usuaris/{id}/edit`</summary>
Permite actualizar los datos de un usuario existente. Al igual que en el alta, devolvemos un array estructurado (`ok`, `missatge`, `redirigir`) que <b style="color: #ffcc00;">Sweet Alert</b> interpreta para mostrar una notificación profesional de éxito o error.

```php
return $this->render('usuari/edit.html.twig', [
    'usuari' => $usuari,
    'formulari' => $form->createView(),
    'ok' => true,
    'missatge' => 'Datos editados correctamente',
    'redirigir' => 'app_usuari_index'
]);
```

</details>

<!-- ENDPOINT: DELETE -->
<details style="background: rgba(255, 50, 50, 0.05); border: 1px solid rgba(255, 50, 50, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #ff4d4d; font-weight: bold; font-size: 0.9rem;">◢ ELIMINACIÓN PROTEGIDA [delete] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/usuaris/{id}`</summary>
Gestiona la baja irreversible. Para prevenir ataques CSRF, el proceso requiere la validación de un token único generado para la sesión del administrador.

```php
if ($this->isCsrfTokenValid('delete'.$usuari->getId(), $request->getPayload()->getString('_token'))) {
    $usuariRepository->remove($usuari, true);
}
```

</details>

<!-- ENDPOINT: MODERACIÓN -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ MODERACIÓN QUIRÚRGICA ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/usuaris/{id}/edit-review/{ressenya_id}`</summary>
Permite actuar sobre el contenido conflictivo (reseñas y favoritos). Utiliza el atributo `MapEntity` para localizar automáticamente las relaciones mediante sus IDs en la URL.

```php
public function editRessenya(
    Usuari $usuari,
    #[MapEntity(id: 'ressenya_id')] Ressenya $ressenya
): Response {
    if ($this->isCsrfTokenValid('edit'.$ressenya->getId(), $request->getPayload()->getString('_token'))) {
        $ressenyaRepository->save($ressenya, true);
    }
}
```

- `📍 src/Controller/Admin/UsuarioPanelAdminController.php`
  </details>
  </details>

<!-- CONTROLADOR: LOGIN_ADMIN -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🔑 LoginAdminController (ACCESO_SISTEMA)</summary>
<br>
Gestiona el acceso físico al panel de administración. A diferencia de otros controladores, este se apoya fuertemente en el motor de seguridad de Symfony mediante la interfaz `AuthenticationUtils`.

<br>

<!-- ENDPOINT: LOGIN -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ GESTIÓN DE ACCESO [login] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/login`</summary>
Inyectamos `AuthenticationUtils` para mejorar la experiencia del administrador. Permite detectar si el último intento falló para mostrar un mensaje claro y recupera el nombre de usuario escrito para evitar redundancia.

```php
public function login(AuthenticationUtils $authenticationUtils): Response {
    $error = $authenticationUtils->getLastAuthenticationError();
    $lastUsername = $authenticationUtils->getLastUsername();

    return $this->render('login/login.html.twig', [
        'last_username' => $lastUsername,
        'error' => $error,
    ]);
}
```

</details>

<!-- ENDPOINT: REDIRECT -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ CONTROL DE FLUJO [loginRedirect] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/login?restricted=1`</summary>
Manejamos la redirección `restricted` para accesos prohibidos. Si un usuario intenta entrar en una zona sin el rol `ROLE_ADMIN`, es devuelto al login con un parámetro de consulta que activa el mensaje de error.

```php
if ($request->query->get('restricted')) {
    $error = ['messageKey' => 'Acceso denegado.'];
}
```

- `📍 src/Controller/Admin/LoginAdminController.php`
  </details>
  </details>

<!-- CONTROLADOR: PELICULAS_ADMIN -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🎬 PeliculasAdminController (GESTIÓN_CATÁLOGO)</summary>
<br>
Controlador maestro para el inventario cinematográfico. Gestiona el ciclo de vida completo de los títulos, desde la carga manual de archivos multimedia hasta la limpieza física de activos en el servidor.

<br>

<!-- ENDPOINT: INDEX -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ INVENTARIO LOCAL [index] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/pelicules`</summary>
Muestra el listado completo de películas almacenadas físicamente en nuestra base de datos, permitiendo al administrador auditar el catálogo actual.

```php
public function index(PeliculesRepository $peliculesRepository): Response {
    return $this->render('pelicules/index.html.twig', [
        'pelicules' => $peliculesRepository->findAll(),
    ]);
}
```

</details>

<!-- ENDPOINT: NEW -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ CARGA MULTIMEDIA [new] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/pelicules/new`</summary>
Gestiona el alta manual de películas. Lo más crítico es la inyección de grupos de validación (`manual`) para forzar la verificación de archivos físicos. Al terminar, notificamos al sistema mediante el objeto de respuesta para que <b style="color: #ffcc00;">Sweet Alert</b> confirme la operación.

```php
return $this->render('pelicules/new.html.twig', [
    'ok' => true,
    'missatge' => 'Película creada correctament.',
    'redirigir' => 'app_pelicules_index'
]);
```

</details>

<!-- ENDPOINT: DELETE -->
<details style="background: rgba(255, 50, 50, 0.05); border: 1px solid rgba(255, 50, 50, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #ff4d4d; font-weight: bold; font-size: 0.9rem;">◢ PURGA DE ACTIVOS [delete] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/pelicules/{id}`</summary>
A diferencia de otros borrados, este incluye una **limpieza física**. El sistema localiza los archivos de póster y fondo en el disco duro y los elimina mediante `unlink()` para evitar el consumo innecesario de almacenamiento.

```php
if (file_exists($posterPath)) unlink($posterPath);
if (file_exists($fonsPath)) unlink($fonsPath);
```

- `📍 src/Controller/Admin/PeliculasAdminController.php`
  </details>
  </details>

<!-- CONTROLADOR: ACTOR_ADMIN -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🎭 ActorAdminController (GESTIÓN_REPARTO)</summary>
<br>
Controlador dedicado a la administración del elenco internacional. Su función principal es supervisar a los profesionales sincronizados desde TMDB y gestionar su permanencia en el ecosistema local.

<br>

<!-- ENDPOINT: INDEX -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ LISTADO DE ELENCO [index] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/actor`</summary>
Recupera y visualiza la totalidad de los actores registrados, facilitando la auditoría de perfiles y fotos de reparto.

```php
public function index(ActorRepository $actorRepository): Response {
    return $this->render('actor/index.html.twig', [
        'actors' => $actorRepository->findAll(),
    ]);
}
```

</details>

<!-- ENDPOINT: DELETE -->
<details style="background: rgba(255, 50, 50, 0.05); border: 1px solid rgba(255, 50, 50, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #ff4d4d; font-weight: bold; font-size: 0.9rem;">◢ BAJA DE REPARTO [delete] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/actor/{id}`</summary>
Procesa la eliminación de un perfil. Implementa una barrera de seguridad mediante tokens CSRF para evitar borrados accidentales o malintencionados desde fuentes externas.

```php
if ($this->isCsrfTokenValid('delete'.$actor->getId(), $request->getPayload()->getString('_token'))) {
    $actorRepository->remove($actor, true);
}
```

- `📍 src/Controller/Admin/ActorAdminController.php`
  </details>
  </details>

<!-- CONTROLADOR: GENERE_ADMIN -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🏷️ GenereAdminController (GESTIÓN_CATEGORÍAS)</summary>
<br>
Controlador para la supervisión de la taxonomía del sistema. Gestiona la visualización de los géneros oficiales sincronizados, permitiendo al administrador verificar la correcta asociación de películas por temática.

<br>

<!-- ENDPOINT: INDEX -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ DICCIONARIO DE GÉNEROS [index] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/genere`</summary>
Lista todas las categorías disponibles en el sistema, sirviendo como mapa de referencia para la organización del contenido.

```php
public function index(GenereRepository $genereRepository): Response {
    return $this->render('genere/index.html.twig', [
        'generes' => $genereRepository->findAll(),
    ]);
}
```

- `📍 src/Controller/Admin/GenereAdminController.php`
  </details>
  </details>

<!-- CONTROLADOR: RESSENYA_ADMIN -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">⭐ RessenyaAdminController (MODERACIÓN_CRÍTICA)</summary>
<br>
Controlador estratégico para el mantenimiento del tono y calidad de la comunidad. Gestiona el feedback de los usuarios, permitiendo editar o eliminar comentarios que no cumplan con las normas de convivencia de 7Vision.

<br>

<!-- ENDPOINT: INDEX -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ MURO DE CRÍTICAS [index] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/ressenya`</summary>
Recopila todas las valoraciones y comentarios del sistema, ofreciendo una visión global de la interacción de los usuarios con el contenido cinematográfico.

```php
public function index(RessenyaRepository $ressenyaRepository): Response {
    return $this->render('ressenya/index.html.twig', [
        'ressenyas' => $ressenyaRepository->findAll(),
    ]);
}
```

</details>

<!-- ENDPOINT: EDIT -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ CURACIÓN DE CONTENIDO [edit] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/ressenya/{id}/edit`</summary>
Permite rectificar comentarios o ajustar puntuaciones. El flujo utiliza la lógica de respuesta estructurada para que <b style="color: #ffcc00;">Sweet Alert</b> confirme la moderación exitosa en el panel administrativo.

```php
return $this->render('ressenya/edit.html.twig', [
    'ok' => true,
    'missatge' => 'Reseña editada correctamente',
    'redirigir' => 'app_ressenya_index'
]);
```

</details>

<!-- ENDPOINT: DELETE -->
<details style="background: rgba(255, 50, 50, 0.05); border: 1px solid rgba(255, 50, 50, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #ff4d4d; font-weight: bold; font-size: 0.9rem;">◢ ELIMINACIÓN DE FEEDBACK [delete] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin/ressenya/{id}`</summary>
Gestiona el borrado definitivo de reseñas conflictivas, protegiendo la integridad mediante validación CSRF obligatoria.

```php
if ($this->isCsrfTokenValid('delete'.$ressenya->getId(), $request->getPayload()->getString('_token'))) {
    $ressenyaRepository->remove($ressenya, true);
}
```

- `📍 src/Controller/Admin/RessenyaAdminController.php`
  </details>
  </details>

<!-- CONTROLADOR: DASHBOARD_ADMIN -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🖥️ DashboardAdminController (NÚCLEO_ADMIN)</summary>
<br>
Punto de entrada central al sistema de administración. Orquesta la navegación dinámica hacia todas las entidades y el portal de documentación técnica.

<br>

<!-- ENDPOINT: INDEX -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ PANEL DE CONTROL [index] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/admin`</summary>
Genera una matriz dinámica de accesos. Cada bloque del dashboard vincula un icono de FontAwesome con su descripción y ruta de Symfony, centralizando el acceso a usuarios, películas, actores, géneros y reseñas.

```php
public function index(): Response {
    $entities = [
        ['name' => 'Usuaris', 'route' => 'app_usuari_index'],
        ['name' => 'Portal de Docs', 'route' => 'app_docs'],
        // ...
    ];
    return $this->render('dashboard/index.html.twig', ['entities' => $entities]);
}
```

- `📍 src/Controller/Admin/DashboardAdminController.php`
  </details>
  </details>

<!-- CONTROLADOR: DOCS_ADMIN -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">📚 DocsAdminController (PORTAL_CONOCIMIENTO)</summary>
<br>
El centro de inteligencia del proyecto. Este controlador transforma archivos Markdown estáticos en una experiencia de lectura interactiva para desarrolladores, unificando la documentación del Backend y del Frontend en una sola interfaz administrativa.

<br>

<!-- ENDPOINT: INDEX -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ VISOR DE DOCUMENTACIÓN [index] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/docs/{file}`</summary>
Implementa un sistema de mapeo virtual. Localiza archivos `.md` tanto en el núcleo de Symfony como en el repositorio paralelo de Vue.js, inyectando el contenido crudo en un renderizador de Markdown dinámico.

```php
#[Route('/docs/{file}', name: 'app_docs', defaults: ['file' => 'README.md'])]
public function index(string $file): Response {
    $filePath = $fileMapping[$file] ?? ($projectDir . '/' . $file);
    $content = file_get_contents($filePath);
    return $this->render('docs/index.html.twig', ['markdownContent' => $content]);
}
```

- `📍 src/Controller/Admin/DocsAdminController.php`
  </details>
  </details>

</details>

<!-- SUBSECCIÓN: ECOSISTEMA API (CLIENTE) -->
<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;" open>
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 04 :: ECOSISTEMA API (CLIENTE) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<!-- CONTROLADOR: MOVIE_API -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🎬 MovieApiController (CATÁLOGO_DINÁMICO)</summary>
<br>
Motor principal de contenido para el Frontend. Este controlador no solo sirve datos, sino que orquesta la sincronización en tiempo real con TMDB, gestiona el rate limiting y personaliza la experiencia del usuario mediante algoritmos de recomendación.

<br>

<!-- ARQUITECTURA Y LÓGICA CORE -->
<details style="background: rgba(255, 204, 0, 0.05); border: 1px solid rgba(255, 204, 0, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #ffcc00; font-weight: bold; font-size: 0.9rem;">◢ ARQUITECTURA Y LÓGICA CORE ◣</summary>
<br>
El controlador implementa una capa de seguridad global mediante el atributo `#[IsGranted('ROLE_USER')]`, garantizando que todos los servicios de la API de películas estén blindados tras autenticación.

#### Dependencias Críticas

- `IsGranted`: Control de acceso declarativo a nivel de clase y método.
- `LoggerInterface`: Gestión de trazabilidad y registro de errores en procesos de sincronización.
- `RateLimiterFactory`: Motor de protección contra ataques de fuerza bruta en el buscador.
- `CurrentUser`: Inyección automática del objeto `Usuari` autenticado mediante el Token JWT.
- `FileService`: Abstracción para la gestión física de archivos de medios (pósters/fondos).

#### Lógica de Marcado de Favoritos

Para evitar peticiones redundantes del Frontend, el controlador procesa dinámicamente el estado de cada película antes de enviarla. El método `marcarFavoritos` evalúa si el contenido pertenece a la colección privada del usuario, inyectando la propiedad virtual `isFavorite`.

```php
private function marcarFavoritos(array|Pelicules $movies, ?Usuari $user): void {
    $moviesArray = is_array($movies) ? $movies : [$movies];
    foreach ($moviesArray as $movie) {
        $movie->isFavorite = $user ? $user->getFavorits()->contains($movie) : false;
    }
}
```

</details>

<!-- ENDPOINT: INDEX -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ CATÁLOGO TOTAL [index] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules`</summary>
Retorna la totalidad de las películas disponibles en el sistema local. Aplica automáticamente la lógica de marcado de favoritos para el usuario autenticado y utiliza el grupo de serialización `movie:read`.

```php
$movies = $repo->findAll();
return $this->json($movies, 200, [], ['groups' => 'movie:read']);
```

</details>

<!-- ENDPOINT: LIST_GENRES -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ LISTADO DE GÉNEROS [listGenres] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules/generes`</summary>
Proporciona el catálogo completo de categorías disponibles. Este endpoint es vital para la construcción de menús dinámicos y sistemas de filtrado en el Frontend.

#### Serialización Segura (Trilingüe)

Para garantizar la integridad y la internacionalización, el endpoint emite los datos bajo el grupo `genre:read`. Esto incluye los identificadores internos, el ID de TMDB y los nombres en los tres idiomas soportados (`nomEs`, `nomCa`, `nomEn`).

```php
$generes = $genereRepo->findAll();
return $this->json($generes, 200, [], ['groups' => 'genre:read']);
```

</details>

<!-- ENDPOINT: BUSCAR -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ BÚSQUEDA HÍBRIDA [buscar] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules/buscar`</summary>
Punto de entrada más complejo del sistema. Implementa una búsqueda de doble capa y un blindaje de seguridad multinivel:

#### Lógica del Rate Limiter

Para prevenir abusos y ataques de denegación de servicio, se utiliza `RateLimiterFactory`. El sistema identifica al cliente mediante su **ID de usuario** (o su **IP** si no está autenticado) y le asigna un contador de tickets. Cada búsqueda consume 1 ticket; si el usuario agota su cupo (10 por minuto), el servidor devuelve un error **429 (Too Many Requests)** con el tiempo restante para el desbloqueo.

#### Gestión del Booleano `live`

El parámetro `live` determina el alcance de la búsqueda:

- `true`: Búsqueda ultrarrápida restringida a la base de datos local. Ideal para autocompletados (Live Search).
- `false`: Búsqueda profunda. Si no hay resultados locales suficientes, el sistema se sincroniza en tiempo real con TMDB.

#### Validaciones de Seguridad

Se aplican filtros estrictos antes de procesar cualquier consulta:

- **Query Obligatoria**: No se permiten búsquedas vacías.
- **Longitud Máxima**: El término de búsqueda está limitado a **20 caracteres** para optimizar el rendimiento de los índices de la DB.

```php
$limiter = $apiMovieSearchLimiter->create($identificador);
if (false === $limiter->consume(1)->isAccepted()) {
    return $this->json(['error' => 'Demasiadas búsquedas'], 429);
}
$peliculesFinals = $movieSyncService->buscarYSincronitzar($query, $isLive);
```

</details>

<!-- ENDPOINT: NOVEDADES -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ ÚLTIMOS ESTRENOS [novedades] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules/novedades`</summary>
Filtra y devuelve las 5 películas más recientes añadidas al sistema, priorizando las fechas de estreno más actuales para mantener el feed de novedades dinámico.

```php
$movies = $repo->findUltimesNovedats(5);
```

</details>

<!-- ENDPOINT: SMART FEED -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ FEED PERSONALIZADO [personal] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules/personal`</summary>
Genera una experiencia única para cada usuario. Utiliza el método `findSmartFeed` del repositorio para combinar las últimas películas marcadas como favoritas con novedades globales, garantizando un muro de contenido siempre fresco y sin duplicados.

```php
$movies = $repo->findSmartFeed($user, 10);
```

</details>

<!-- ENDPOINT: POPULARS -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ TENDENCIAS COMUNITARIAS [populars] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules/populars`</summary>
Identifica los títulos con mayor interacción social (reseñas y comentarios). Este endpoint permite al frontend destacar lo que más está gustando o debatiendo la comunidad en tiempo real.

```php
$movies = $repo->findMesComentades(5);
```

</details>

<!-- ENDPOINT: BY-GENRE -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ FILTRADO TEMÁTICO [getByGenre] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules/by-genre`</summary>
Permite navegar por categorías mediante un motor de resolución inteligente de tres pasos:

1. **Intento por ID numérico**: Si el parámetro es un número, se busca directamente en la clave primaria.
2. **Nombre exacto multilingüe**: Busca coincidencias estrictas en `nomEs`, `nomCa` o `nomEn`.
3. **Búsqueda difusa (Fallback)**: Si no hay éxito previo, utiliza un `QueryBuilder` con operadores `LIKE` y comodines (`%`) para capturar variaciones de acentos o mayúsculas.

Una vez localizado el género, el `MovieSyncService` asegura que la base de datos tenga contenido actualizado sincronizando con la API externa si es necesario.

```php
$genere = is_numeric($genreParam) ? $genereRepo->find((int) $genreParam) : null;
if (!$genere) {
    $genere = $genereRepo->findOneBy(['nomEs' => $genreParam]) ?? $genereRepo->findOneBy(['nomCa' => $genreParam]) ?? $genereRepo->findOneBy(['nomEn' => $genreParam]);
}
if (!$genere) {
    $genere = $genereRepo->createQueryBuilder('g')
        ->where('g.nomEs LIKE :q OR g.nomCa LIKE :q OR g.nomEn LIKE :q')
        ->setParameter('q', '%' . $genreParam . '%')->getQuery()->getOneOrNullResult();
}
```

</details>

<!-- ENDPOINT: SHOW -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ FICHA TÉCNICA DETALLADA [show] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules/{id}`</summary>
Entrega la información completa de una película. Implementa una estrategia de **Carga Diferida de Datos Pesados (Lazy Enrichment)**:

#### Enriquecimiento TMDB

Para optimizar el almacenamiento, las películas sincronizadas inicialmente solo guardan datos básicos. Al acceder al detalle (`show`), el sistema verifica si la película proviene de TMDB (`tmdbId`). Si es así, ejecuta `enriquecerPelicula()` para obtener:

- **Tráiler oficial**.
- **Reparto completo (Actores)**.
- **Sinopsis en todos los idiomas disponibles**.

Esta operación solo se realiza **una vez por película** (la primera vez que un usuario solicita el detalle), quedando los datos persistidos para futuras consultas.

```php
if ($pelicula->getTmdbId()) {
    $syncService->enriquecerPelicula($pelicula);
}
return $this->json($pelicula, 200, [], ['groups' => 'movie:read']);
```

</details>
<!-- ENDPOINT: TOGGLE FAVORITE -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ INTERACCIÓN SOCIAL [toggleFavorite] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules/{id}/favorite`</summary>
Gestiona la persistencia de preferencias. Al ser una relación ManyToMany, el controlador conmuta el estado de la película en la colección del usuario y devuelve el nuevo estado booleano para actualizar la interfaz al instante.

```php
$user->addFavorit($pelicula); // o removeFavorit
$em->flush();
```

</details>

<!-- ENDPOINT: ADD REVIEW -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ MOTOR DE RESEÑAS [addReview] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules/review`</summary>
Procesa el feedback de la comunidad mediante una arquitectura robusta:

#### Validación de Seguridad

El sistema rechaza cualquier petición incompleta o con datos fuera de rango. Se asegura de que el `movieId` sea válido y que el `rating` sea estrictamente un número entero entre **1 y 10**.

#### Lógica de Actualización (Upsert)

Para evitar la duplicidad de críticas, el controlador primero consulta si ya existe una reseña vinculada a ese usuario y película.

- Si existe: Se actualizan los campos de puntuación y comentario.
- Si no existe: Se instancia una nueva entidad `Ressenya`.
  En ambos casos, se refresca la fecha de creación/modificación con `DateTimeImmutable` para mantener el orden cronológico.

```php
if (empty($data['movieId']) || !isset($data['rating'])) return $this->json(['error' => '...'], 400);
$rating = (int)$data['rating'];
if ($rating < 1 || $rating > 10) return $this->json(['error' => '...'], 400);

$review = $reviewRepo->findOneBy(['usuari' => $user, 'pelicula' => $peli]);
// ...
$review->setPuntuacio($rating)->setComentari($data['comment'] ?? '')->setDataCreacio(new \DateTimeImmutable());
$reviewRepo->save($review, true);
```

</details>
<!-- ENDPOINT: UPLOAD -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ CONTENIDO DE USUARIO [upload] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/pelicules/upload`</summary>
Permite a los usuarios expandir el catálogo. El controlador gestiona la subida de archivos (póster y fondo) a través del `FileService` y vincula automáticamente al usuario actual como propietario de la nueva película.

```php
$posterName = $fileService->upload($posterFile, $path);
$peli->setPoster($posterName);
$em->persist($peli);
```

- `📍 src/Controller/Api/MovieApiController.php`
  </details>
  </details>

<!-- CONTROLADOR: USER_API -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">👤 UserApiController (GESTIÓN_IDENTIDAD)</summary>
<br>
Controlador dedicado al ciclo de vida del usuario en la plataforma. Gestiona desde el registro seguro (con técnicas anti-bot) hasta la actualización de perfiles y la entrega de datos de actividad privada.

<br>

<!-- ARQUITECTURA Y SEGURIDAD -->
<details style="background: rgba(255, 204, 0, 0.05); border: 1px solid rgba(255, 204, 0, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #ffcc00; font-weight: bold; font-size: 0.9rem;">◢ ARQUITECTURA Y SEGURIDAD ◣</summary>
<br>
Este controlador implementa una política de seguridad de "Denegación por Defecto" mediante el atributo `#[IsGranted('IS_AUTHENTICATED_FULLY')]` a nivel de clase. Esto asegura que todos los endpoints requieran un Token JWT válido, exceptuando el flujo de registro que está marcado explícitamente como `PUBLIC_ACCESS`.

#### Dependencias del Núcleo

- `CurrentUser`: Inyección del usuario autenticado para operaciones de perfil.
- `IsGranted`: Control de acceso granular para distinguir entre perfiles públicos y privados.
- `ValidatorInterface`: Motor de validación de Symfony para asegurar la integridad de los datos del usuario.
- `FileService`: Gestión de almacenamiento y limpieza de avatares físicos.
- `RateLimiterFactory`: Protección contra abusos en el sistema de registro (basado en IP).
- `UserPasswordHasherInterface`: Algoritmos de hashing seguro (BCrypt/Argon2) para credenciales.

#### Registro Seguro y Anti-Abuso

El endpoint de registro incorpora técnicas avanzadas de protección:

- **IP-Based Rate Limiting**: Evita la creación masiva de cuentas desde un mismo origen.
- **Estrategia Honeypot**: El campo invisible `email_verification_field` actúa como trampa para bots; si se rellena, el servidor simula un registro exitoso pero ignora la petición.
- **Validación de Unicidad**: Verificación proactiva de disponibilidad de `username` antes de intentar la persistencia.

```php
#[IsGranted('PUBLIC_ACCESS')]
public function register(..., RateLimiterFactory $apiRegisterLimiter): JsonResponse {
    $limiter = $apiRegisterLimiter->create($request->getClientIp());
    if (false === $limiter->consume(1)->isAccepted()) {
        return $this->json(['error' => 'Demasiados intentos'], 429);
    }
    // ... Lógica Honeypot ...
}
```

</details>

<!-- ENDPOINT: INFO USER -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ IDENTIDAD JWT [infoUser] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/infoUser`</summary>
Retorna el objeto del usuario autenticado. Para garantizar el rendimiento y la seguridad del payload, solo se emiten los campos bajo el grupo `user:read`, evitando cargar relaciones pesadas de forma innecesaria.

```php
return $this->json($user, 200, [], ['groups' => ['user:read']]);
```

</details>

<!-- ENDPOINT: PROFILE DATA -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ DATOS DE ACTIVIDAD [profileData] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/user/profile-data`</summary>
Endpoint optimizado para el panel de perfil.

```php
return $this->json([
    'favorites' => $user->getFavorits()->toArray(),
    'reviews'   => $reviews,
], 200, [], ['groups' => ['movie:read']]);
```

</details>

<!-- ENDPOINT: REGISTER -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ ALTA DE CLIENTE [register] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/register`</summary>
Implementa un flujo de registro blindado contra ataques automatizados y con validación de integridad:

#### Blindaje Anti-Bot (Honeypot & Rate Limiting)

- **Rate Limiter**: Se aplica una restricción por IP mediante `RateLimiterFactory` para evitar ataques de fuerza bruta o creación masiva de cuentas.
- **Trampa Honeypot**: Se utiliza el campo `email_verification_field`. Los bots tienden a rellenar todos los campos del formulario; si este campo (que es invisible para humanos) contiene datos, el sistema devuelve un **201 (Éxito)** falso para "quemar" la acción del bot sin procesar nada en la DB.

#### Verificación de Identidad Única

Antes de instanciar al nuevo usuario, el sistema consulta al `UsuariRepository` para asegurar que el nombre de usuario no esté en uso, evitando colisiones de identidad en la base de datos.

#### Seguridad y Grupos de Validación

- **Cifrado de Alta Resistencia**: Las contraseñas se hashean mediante `UserPasswordHasherInterface` antes de la persistencia.
- **Validación Selectiva (Grupos)**: Se ejecuta el validador especificando el grupo `Default`. Esto permite ignorar reglas de otros grupos (como `manual`), que se activan solo cuando hay subidas físicas de archivos, garantizando que el registro vía JSON sea fluido y seguro.

```php
if (!empty($data['email_verification_field'])) return $this->json(['message' => 'Exito'], 201);
if ($usuariRepo->findOneBy(['username' => $data['username']])) return $this->json(['error' => 'En uso'], 400);

$user->setPassword($hasher->hashPassword($user, $data['password']));
$errors = $validator->validate($user, null, ['Default']);
```

</details>

<!-- ENDPOINT: UPDATE AVATAR -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ GESTIÓN DE AVATAR [updateAvatar] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/user/avatar`</summary>
Permite la actualización del elemento visual de identidad mediante un flujo binario seguro:

#### Validación de Archivo

El sistema ejecuta las restricciones `#[Assert\File]` definidas en la entidad `Usuari`, verificando el tipo MIME (imágenes), el tamaño máximo y la integridad del archivo antes de procesarlo.

#### Protección de Activos por Defecto

Implementa una lógica de **limpieza de huérfanos** con salvaguarda: antes de guardar el nuevo avatar, el sistema verifica el nombre del archivo anterior. Solo procede al borrado físico (`unlink`) si el avatar previo no pertenece a la colección de los **7 avatares por defecto** (`01.webp` a `07.webp`), protegiendo los recursos básicos del sistema.

```php
$errors = $validator->validate($user);
if (count($errors) > 0) return $this->json(['error' => '...'], 400);

$defaults = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp', '06.webp', '07.webp'];
if ($oldAvatar && !in_array($oldAvatar, $defaults)) {
    unlink($oldFilePath);
}
```

</details>

<!-- ENDPOINT: UPDATE USER -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ EDICIÓN DE PERFIL [updateUser] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/user/update`</summary>
Permite al usuario gestionar su identidad y credenciales de forma integral:

#### Flexibilidad de Entrada

Soporta tanto peticiones **JSON** nativas (`getPayload`) como envíos tradicionales mediante **FormData** (POST), garantizando compatibilidad con diversas implementaciones del frontend.

#### Gestión de Identidad y Seguridad

- **Verificación de Unicidad**: Al cambiar el `username`, el sistema valida que el nuevo nombre no esté ocupado por otro usuario.
- **Cambio de Contraseña**: Se exige una longitud mínima de **6 caracteres**. Las nuevas contraseñas se hashean inmediatamente mediante `UserPasswordHasherInterface`.
- **Validación por Grupos**: Se utiliza el grupo `Default` para asegurar que los cambios cumplen las reglas de la entidad sin interferir con validaciones de otros contextos.

#### Rotación Proactiva de JWT (Crítico)

Si el usuario modifica datos críticos (nombre de usuario o contraseña), su token actual quedaría invalidado o desincronizado. El controlador detecta este cambio (`$usernameChanged`) y genera automáticamente un **nuevo Token JWT** que se devuelve en la respuesta. Esto permite al frontend actualizar la sesión en tiempo real sin obligar al usuario a re-identificarse.

```php
if ($existing && $existing->getId() !== $user->getId()) return $this->json(['error' => '...'], 400);
if ($usernameChanged) {
    $responseData['token'] = $jwtManager->create($user);
}
return $this->json($responseData, 200, [], ['groups' => ['user:read']]);
```

- `📍 src/Controller/Api/UserApiController.php`
      </details>
      </details>

<!-- CONTROLADOR: AI_API -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🤖 AiController (ASISTENCIA_INTELIGENTE)</summary>
<br>
Punto de conexión con los servicios de inteligencia artificial. Permite al usuario interactuar con Vision-AI para obtener recomendaciones personalizadas basadas en lenguaje natural.

<br>

<!-- ARQUITECTURA Y SEGURIDAD -->
<details style="background: rgba(255, 204, 0, 0.05); border: 1px solid rgba(255, 204, 0, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #ffcc00; font-weight: bold; font-size: 0.9rem;">◢ ARQUITECTURA Y SEGURIDAD ◣</summary>
<br>
El controlador de Inteligencia Artificial está blindado mediante el atributo `#[IsGranted('ROLE_USER')]` a nivel de clase. Esto asegura que solo los usuarios autenticados puedan consumir recursos de la IA, protegiendo así el sistema contra el uso no autorizado de tokens de la API externa y optimizando los costes operativos.

#### Dependencias del Núcleo

- `AiService`: Servicio de abstracción que gestiona la comunicación con los modelos de lenguaje (LLM) y la inyección de contexto del catálogo local.
- `IsGranted`: Control de acceso perimetral para restringir el uso de la IA a la comunidad registrada.

#### Flujo de Conversación

El endpoint `/chat` actúa como un puente síncrono:

1.  **Validación de Payload**: Se asegura de que el prompt no esté vacío.
2.  **Procesamiento Inteligente**: Delega en el `AiService` la generación de la respuesta.
3.  **Respuesta Estructurada**: Devuelve un objeto JSON con el estado de la operación y el contenido generado por la IA.

```php
#[IsGranted('ROLE_USER')]
class AiController extends AbstractController {
    public function chat(Request $request): JsonResponse {
        $prompt = $data['prompt'] ?? null;
        if (!$prompt) return $this->json(['status' => 'ERROR'], 400);
        $response = $this->aiService->getRecommendation($prompt);
        return $this->json(['status' => 'SUCCESS', 'answer' => $response]);
    }
}
```

</details>

<!-- ENDPOINT: CHAT -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
<summary style="cursor: pointer; color: #00f2fe; font-weight: bold; font-size: 0.9rem;">◢ MOTOR DE DIÁLOGO [chat] ◣ <b style="color: #ffcc00;">ENDPOINT:</b> `/api/ai/chat`</summary>
Puente de comunicación con el `AiService`. Procesa los prompts del usuario y devuelve la respuesta generada por la IA, integrando el conocimiento del catálogo de 7Vision en las recomendaciones.

```php
$response = $this->aiService->getRecommendation($prompt);
return $this->json(['status' => 'SUCCESS', 'answer' => $response]);
```

- `📍 src/Controller/Api/AiController.php`
      </details>
      </details>

</details>

</div>

<div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">

## <a id="05-datos"></a>🗄️ 05 // NÚCLEO DE DATOS

Persistencia avanzada mediante **Doctrine ORM**, garantizando que la base de datos sea siempre un reflejo fiel de la realidad y mantenga una integridad absoluta.

<br>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 01 :: DICCIONARIO DE ENTIDADES ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="background: rgba(255, 193, 7, 0.05); border: 1px solid rgba(255, 193, 7, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
<p style="color: #ffc107; font-weight: bold; font-size: 1rem; margin-bottom: 1rem;">
💎 REGLA DE ORO: BLINDAJE DE RECURSIVIDAD (Anti-Recursion Protocol)
</p>
<p style="color: #fff; font-size: 0.9rem; line-height: 1.6;">
Para evitar <b>bucles infinitos</b> y el temido <b>Error 500</b> durante la serialización de objetos complejos (bi-direccionales), aplicamos una segregación estricta de grupos:
</p>
<ul style="color: #ccc; font-size: 0.85rem; line-height: 1.5;">
    <li><b>Hacia Adelante:</b> Usamos grupos como <code>movie:read</code> para que la entidad principal exponga sus datos.</li>
    <li><b>Hacia Atrás (Cortafuegos):</b> La entidad relacionada NUNCA debe tener el mismo grupo en su campo inverso (ej: Película -> Propietario).</li>
</ul>
<p style="color: #fff; font-size: 0.85rem; margin-top: 10px;">
<i>"Si el serializador no encuentra el grupo en la relación inversa, el bucle se rompe y el sistema permanece estable."</i>
</p>
</div>


<!-- ENTIDAD: USUARI -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">👤 Entidad: Usuari (NÚCLEO_SEGURIDAD)</summary>
<br>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Doble Validación de Identidad:</b> Implementamos seguridad en dos niveles. El atributo <code>UniqueConstraint</code> crea una regla física en la base de datos para evitar duplicados a nivel de motor, mientras que <code>UniqueEntity</code> permite que Symfony capture el error elegantemente y devuelva un mensaje amigable al usuario antes de que la DB falle.
</p>

```php
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_USERNAME', fields: ['username'])]
#[UniqueEntity(fields: ['username'], message: 'Nombre de usuario no disponible')]
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Grupos de Serialización:</b> Utilizamos <code>Groups</code> para controlar qué información es visible. En este caso, permitimos que el nombre de usuario se vea tanto en su perfil (read) como al listar los autores de las reseñas de las películas (movie:read).
</p>

```php
#[Groups(['user:read', 'movie:read'])]
private ?string $username = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Restricciones de Carga:</b> Limitamos los avatares a 2MB y formatos específicos para optimizar el almacenamiento y prevenir la subida de archivos maliciosos o excesivamente pesados que degraden el rendimiento del servidor.
</p>

```php
#[Assert\File(maxSize: '2M', mimeTypes: ['image/jpeg', 'image/png', 'image/webp'])]
private ?UploadedFile $avatarFile = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Constructor e Inmutabilidad:</b> Usamos <code>\DateTimeImmutable</code> con el prefijo de barra invertida para indicar a Symfony que usamos la clase nativa de PHP. Al hacerlo en el constructor, garantizamos que la fecha de creación se fije en el momento exacto del registro y nunca pueda ser alterada.
</p>

````php
public function __construct() {
    $this->dataCreacio = new \DateTimeImmutable();
    $this->roles = ["ROLE_USER"];
    $this->ressenyas = new ArrayCollection();
}
<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Seguridad en Roles:</b> Esta técnica garantiza que todo usuario tenga al menos el rol base, incluso si falla la base de datos. El uso de <code>array_unique</code> evita duplicados accidentales entre el rol del constructor y el de la DB.
</p>

```php
public function getRoles(): array {
    $roles = $this->roles;
    $roles[] = 'ROLE_USER';
    return array_unique($roles);
}
````

</div>

- `⚙️ src/Entity/Usuari.php`
  </details>

<!-- ENTIDAD: PELICULES -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🎬 Entidad: Pelicules (NÚCLEO_CONTENIDO)</summary>
<br>

<!-- SUBSECCIÓN: MÉTODOS DE REPOSITORIO (CARD MODERNA) -->
<details style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1rem; margin-bottom: 2rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">🔍 MÉTODOS DE CONSULTA (REPOSITORY)</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.1); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Tendencias (Más Comentadas):</b> Recuperamos las películas con mayor volumen de interacción. Mediante un <code>leftJoin</code> con las reseñas y un <code>groupBy</code>, el sistema cuenta cuántas opiniones tiene cada título para ordenarlas de mayor a menor popularidad real.
</p>

```php
public function findMesComentades(int $limit = 5): array {
    return $this->createQueryBuilder('p')
        ->leftJoin('p.ressenyas', 'r')
        ->groupBy('p.id')
        ->orderBy('COUNT(r.id)', 'DESC')
        ->setMaxResults($limit)
        ->getQuery()->getResult();
}
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Filtrado por Género Específico:</b> Permite aislar el contenido por categorías. Al usar un <code>innerJoin</code>, aseguramos que solo se recuperen películas que tengan asignado el género solicitado, optimizando la carga al no traer datos irrelevantes.
</p>

```php
public function findByGenere($genere, int $limit = 60): array {
    return $this->createQueryBuilder('p')
        ->innerJoin('p.generes', 'g')
        ->where('g = :genere')
        ->setParameter('genere', $genere)
        ->orderBy('p.dataEstrena', 'DESC')
        ->setMaxResults($limit)
        ->getQuery()->getResult();
}
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Gestión de Favoritos del Usuario:</b> Recupera las películas marcadas por un usuario concreto. Es la base de la sección "Mi Lista", utilizando una relación ManyToMany inversa para identificar rápidamente las preferencias personales.
</p>

```php
public function findDarrersFavorits(Usuari $user, int $limit = 5): array {
    return $this->createQueryBuilder('p')
        ->innerJoin('p.usuarisFavorits', 'u')
        ->where('u = :user')
        ->setParameter('user', $user)
        ->orderBy('p.id', 'DESC')
        ->setMaxResults($limit)
        ->getQuery()->getResult();
}
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Novedades Temporales:</b> Filtra automáticamente las películas estrenadas en el último mes. Utiliza objetos <code>DateTimeImmutable</code> para realizar comparaciones precisas en la DB, asegurando que el contenido "fresco" siempre esté accesible.
</p>

```php
public function findUltimesNovedats(int $limit = 5): array {
    $faUnMes = new \DateTimeImmutable('-1 month');
    $ara = new \DateTimeImmutable('now');
    return $this->createQueryBuilder('p')
        ->andWhere('p.dataEstrena BETWEEN :inicio AND :fin')
        ->setParameter('inicio', $faUnMes)
        ->setParameter('fin', $ara)
        ->orderBy('p.dataEstrena', 'DESC')
        ->setMaxResults($limit)
        ->getQuery()->getResult();
}
```

</div>

<div style="margin-bottom: 1.5rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Motor "Smart Feed" (Recomendaciones):</b> Este es el núcleo de personalización de 7Vision. Su lógica opera en dos fases: primero intenta llenar la lista con los favoritos del usuario; si no alcanza el límite, realiza una segunda consulta de novedades globales pero **excluyendo explícitamente** los IDs que ya ha encontrado. Esto garantiza un feed siempre lleno, variado y sin duplicados visuales, optimizando el rendimiento al evitar traer toda la base de datos.
</p>

```php
public function findSmartFeed(Usuari $user, int $limit = 10): array {
    $movies = $this->findDarrersFavorits($user, $limit);
    if (count($movies) < $limit) {
        $excludeIds = array_map(fn($p) => $p->getId(), $movies);
        $qb = $this->createQueryBuilder('p')
             ->orderBy('p.dataEstrena', 'DESC')
             ->setMaxResults($limit - count($movies));
        if (!empty($excludeIds)) {
            $qb->andWhere('p.id NOT IN (:ids)')->setParameter('ids', $excludeIds);
        }
        $movies = array_merge($movies, $qb->getQuery()->getResult());
    }
    return $movies;
}
```

</div>

- `⚙️ src/Repository/PeliculesRepository.php`
  </details>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Integridad Técnica (TMDB_ID):</b> El uso de <code>UniqueConstraint</code> en el campo <code>tmdbId</code> es fundamental para evitar la redundancia de datos. Actúa como una "llave maestra" internacional que garantiza que una misma película no se importe varias veces desde la API externa, protegiendo la coherencia del catálogo.
</p>

```php
#[ORM\UniqueConstraint(name: 'UNIQ_TMDB_ID', fields: ['tmdbId'])]
private ?int $tmdbId = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Triple Motor de Serialización:</b> Esta entidad gestiona su visibilidad mediante tres grupos específicos. <code>api</code> asegura que los datos externos cumplan los requisitos de TMDB; <code>manual</code> habilita el flujo de subida de contenido propio del administrador; y <code>movie:read</code> optimiza la entrega de datos al Frontend, ocultando campos técnicos innecesarios.
</p>

```php
#[Assert\NotBlank(groups: ['api'], message: "El ID de TMDB es obligatorio")]
#[Assert\Positive(groups: ['api'])]
#[Groups(['movie:read'])]
private ?int $tmdbId = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Restricciones Multimedia (Uploads):</b> Para los pósters subidos manualmente, aplicamos una validación estricta de 2MB y tipos MIME específicos. Esto asegura que las imágenes mantengan un estándar de calidad y seguridad, evitando el almacenamiento de archivos excesivamente pesados o no autorizados.
</p>

```php
#[Assert\File(maxSize: '2M', mimeTypes: ['image/jpeg', 'image/png', 'image/webp'], groups: ['manual'])]
private ?UploadedFile $posterFile = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Soporte Multi-Idioma Localizado:</b> Mediante el uso de <code>match</code>, la entidad resuelve dinámicamente qué título o sinopsis entregar basándose en el idioma del cliente (CA, ES, EN). Si un idioma específico no tiene contenido, el motor cae automáticamente al castellano por seguridad.
</p>

```php
public function getTitolLocalized(?string $locale = 'es'): ?string {
    return match ($locale) {
        'ca' => $this->titolCa ?? $this->titolEs,
        'en' => $this->titolEn ?? $this->titolEs,
        default => $this->titolEs
    };
}
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Lógica Temporal (Año de Estreno):</b> Calculamos el año dinámicamente a partir de la fecha de estreno. Si no existe una fecha registrada, devolvemos el año actual para evitar errores visuales en la interfaz del usuario.
</p>

```php
#[Groups(['movie:read'])]
public function getAny(): ?int {
    return $this->dataEstrena ? (int)$this->dataEstrena->format('Y') : (int)date('Y');
}
```

</div>

<div style="margin-bottom: 1rem;">
<p style="color: #fff; font-size: 0.95rem;">
<b>Gestión de Colecciones (Constructor):</b> Inicializamos los géneros, actores y reseñas como <code>ArrayCollection</code>. Esto es vital para que Doctrine pueda gestionar las relaciones ManyToMany y OneToMany de forma segura desde el primer segundo de vida del objeto.
</p>
</div>

- `⚙️ src/Entity/Pelicules.php | src/Repository/PeliculesRepository.php`
  </details>

<!-- ENTIDAD: ACTOR -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🎭 Entidad: Actor (CATÁLOGO_REPARTO)</summary>
<br>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Identidad Global (UniqueConstraint):</b> Al igual que con las películas, el <code>tmdbId</code> del actor actúa como su huella digital internacional. El atributo <code>UniqueConstraint</code> asegura que no se dupliquen perfiles de actores en nuestra base de datos, manteniendo un reparto limpio y coherente.
</p>

```php
#[ORM\UniqueConstraint(name: 'UNIQ_ACTOR_TMDB_ID', fields: ['tmdbId'])]
#[Assert\Positive(message: "El ID debe ser un número positivo")]
private ?int $tmdbId = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Representación Visual (Media):</b> El campo <code>foto</code> almacena la ruta de la imagen de perfil del actor proveniente de TMDB. Gracias a los <code>Groups</code>, esta información viaja al Frontend solo cuando es necesario mostrar el reparto de una película.
</p>

```php
#[ORM\Column(length: 255, nullable: true)]
#[Groups(['movie:read'])]
private ?string $foto = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Relación de Elenco (ManyToMany):</b> Los actores mantienen una relación de "muchos a muchos" con las películas. Al ser la parte inversa (mappedBy), la entidad se encarga de centralizar en qué producciones ha participado cada actor de forma automática.
</p>

```php
#[ORM\ManyToMany(targetEntity: Pelicules::class, mappedBy: 'actors')]
private Collection $pelicules;
```

</div>

<div style="margin-bottom: 1rem;">
<p style="color: #fff; font-size: 0.95rem;">
<b>Método de Identificación (__toString):</b> Permite que el sistema trate al objeto directamente como una cadena de texto (el nombre del actor) en contextos de depuración o en selectores automáticos del panel de administración.
</p>
</div>

- `⚙️ src/Entity/Actor.php`
  </details>

<!-- ENTIDAD: GENERE -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🏷️ Entidad: Genere (CATÁLOGO_AUX)</summary>
<br>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Integridad de Origen (TMDB):</b> Al sincronizar con una API externa, es vital asegurar que los identificadores sean coherentes. El atributo <code>Assert\Positive</code> garantiza que solo aceptamos IDs válidos de la base de datos mundial, mientras que el índice único evita duplicar categorías en el sistema.
</p>

```php
#[ORM\Column(unique: true)]
#[Assert\Positive(message: "El ID de TMDB debe ser positivo")]
private ?int $tmdbId = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Lógica de Internacionalización Triple:</b> Para evitar la complejidad en el Frontend, la entidad implementa un método inteligente que selecciona el nombre del género en el idioma disponible, priorizando el castellano pero cayendo en catalán o inglés si es necesario mediante el operador de fusión de null (<code>??</code>).
</p>

```php
#[Groups(['movie:read'])]
public function getNom(): ?string {
    return $this->nomEs ?? $this->nomCa ?? $this->nomEn ?? 'Desconocido';
}
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Control de Visibilidad:</b> Mediante el uso de <code>Groups</code>, marcamos qué campos del género son "públicos" cuando se consulta una película. Esto evita enviar datos innecesarios y optimiza el peso de las respuestas JSON del servidor.
</p>

```php
#[Groups(['movie:read'])]
private ?int $id = null;

#[Groups(['movie:read'])]
private ?int $tmdbId = null;
```

</div>

<div style="margin-bottom: 1rem;">
<p style="color: #fff; font-size: 0.95rem;">
<b>Relación Multidireccional:</b> Mantiene una relación <i>ManyToMany</i> con la entidad <b>Pelicules</b>. Al ser la parte "inversa" de la relación (mappedBy), permite categorizar el contenido de forma masiva y eficiente.
</p>
</div>

<div style="background: rgba(255, 193, 7, 0.05); border-left: 4px solid #ffc107; padding: 10px; margin-bottom: 1rem;">
<p style="color: #ffc107; font-size: 0.85rem; margin: 0;">
    🛡️ <b>ESTRATEGIA DE SEGURIDAD:</b> El acceso al listado maestro de géneros es <b>PUBLIC_ACCESS</b> (vía security.yaml) para garantizar que el megamenú del Frontend cargue instantáneamente sin latencia de sesión. El resto del controlador está blindado mediante seguridad granular <b>ROLE_USER</b> método a método.
</p>
</div>

- `⚙️ src/Entity/Genere.php`
  </details>

<!-- ENTIDAD: RESSENYA -->
<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">⭐ Entidad: Ressenya (NÚCLEO_INTERACCIÓN)</summary>
<br>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Activación de Disparadores (Lifecycle Callbacks):</b> Es obligatorio marcar la entidad con <code>HasLifecycleCallbacks</code> para que Doctrine "escuche" eventos internos. Sin este atributo, métodos como <code>setDataCreacioValue</code> serían ignorados, rompiendo la automatización de fechas del sistema.
</p>

```php
#[ORM\Entity(repositoryClass: RessenyaRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Ressenya { ... }
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Visibilidad de Identificadores (Groups):</b> El ID de la reseña es fundamental en el Frontend para gestionar la reactividad (editar o borrar comentarios específicos). Al incluirlo en <code>movie:read</code> y <code>user:read</code>, garantizamos que la interfaz de usuario pueda referenciar cada objeto de forma inequívoca.
</p>

```php
#[Groups(['user:read', 'movie:read'])]
private ?int $id = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Garantía de Contenido (Asserts):</b> Usamos <code>NotBlank</code> para asegurar que no existan reseñas "fantasmas" sin texto, y <code>Length</code> para forzar un mínimo de 10 caracteres. Esto previene el spam y eleva el estándar de calidad de las críticas en 7Vision.
</p>

```php
#[Assert\NotBlank(message: "El comentario no puede estar vacío")]
#[Assert\Length(min: 10, max: 500, minMessage: "Mínimo {{ min }} caracteres")]
private ?string $comentari = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Arquitectura de Relaciones:</b> La entidad actúa como puente mediante relaciones <code>ManyToOne</code> hacia <b>Usuari</b> y <b>Pelicules</b>. Esta estructura permite que un mismo usuario tenga múltiples críticas y que una película centralice el feedback de toda la comunidad.
</p>

```php
#[ORM\ManyToOne(inversedBy: 'ressenyas')]
#[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
private ?Usuari $usuari = null;
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Representación Textual (__toString):</b> Este método es vital para herramientas de depuración y paneles de administración. Transforma un objeto complejo en una línea de texto legible que identifica al autor, la película y la puntuación de un solo vistazo.
</p>

```php
public function __toString(): string {
    return sprintf('%s - %d⭐ (%s)',
        $this->usuari?->getUsername() ?? 'Anónimo',
        $this->puntuacio,
        $this->pelicula?->getTitle() ?? 'Desconocida'
    );
}
```

</div>

- `⚙️ src/Entity/Ressenya.php | src/Repository/RessenyaRepository.php`
  </details>

</details>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 02 :: FILTROS DE ÉLITE (Data Quality Protocol) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Estándar de Calidad Vision-Core:</b> No aceptamos basura en nuestro catálogo. Hemos implementado un motor de filtrado centralizado en los repositorios para garantizar que el usuario solo vea contenido premium.
</p>

#### Reglas de Oro del Catálogo

1. <b>Cero Fantasmas:</b> Se ocultan automáticamente películas con puntuación 0 o sin votos.
2. <b>Cero Spoilers del Futuro:</b> No se muestran películas cuya fecha de estreno sea superior a la fecha actual.
3. <b>Centralización (DRY):</b> El método <code>applyQualityFilters</code> se inyecta en todas las consultas (Home, Buscador, Géneros).

```php
// PeliculesRepository.php
private function applyQualityFilters(QueryBuilder $qb): QueryBuilder {
    return $qb->andWhere('p.dataEstrena <= :today')
              ->andWhere('p.puntuacio > 0')
              ->setParameter('today', new \DateTimeImmutable());
}
```

</div>
</details>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 03 :: EVOLUCIÓN DEL ESQUEMA (MIGRATIONS) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Control de Versiones de DB:</b> En 7Vision, el esquema de la base de datos es código. Utilizamos <code>Doctrine Migrations</code> para asegurar que cualquier cambio en las entidades se propague de forma segura y reversible entre los entornos de desarrollo, staging y producción.
</p>

```bash
# Generar una nueva migración tras cambiar una entidad
php bin/console make:migration

# Ejecutar las migraciones pendientes
php bin/console doctrine:migrations:migrate
```

</div>
</details>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 03 :: ESTRATEGIA DE CARGA (FIXTURES) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Sembrado de Datos (Seeding):</b> Para que el sistema sea funcional desde el "minuto cero", utilizamos Fixtures. Esto nos permite generar automáticamente el usuario administrador maestro y el catálogo completo de géneros oficiales de TMDB.
</p>

```php
public function load(ObjectManager $manager): void {
    // 1. Creación del Admin Maestro
    $admin = new Usuari();
    $admin->setUsername('admin')->setRoles(['ROLE_ADMIN']);
    $password = $this->hasher->hashPassword($admin, 'Admin7Vision');
    $admin->setPassword($password);
    $manager->persist($admin);

    // 2. Carga Masiva de Géneros (TMDB Standard)
    foreach ($generesData as [$id, $es, $ca, $en]) {
        $genere = new Genere();
        $genere->setTmdbId($id)->setNomEs($es)->setNomCa($ca)->setNomEn($en);
        $manager->persist($genere);
    }
    $manager->flush();
}
```

</div>

<div style="margin-bottom: 1.5rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Ejecución del Comando:</b> Para aplicar estos datos y resetear la DB a su estado inicial óptimo, ejecuta:
</p>

```bash
php bin/console doctrine:fixtures:load
```

</div>

<div style="background: rgba(255, 193, 7, 0.05); border-left: 4px solid #ffc107; padding: 10px; margin-bottom: 1rem;">
<p style="color: #ffc107; font-size: 0.85rem; margin: 0;">
    ⚠️ <b>ADVERTENCIA:</b> Este comando purga la base de datos antes de cargar los nuevos registros. Esta pensado para entornos de desarrollo o durante la inicialización del sistema.
</p>
</div>

- `⚙️ src/DataFixtures/AppFixtures.php`
  </details>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 04 :: INTEGRIDAD Y VALIDACIÓN CRUZADA ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Validaciones de Callback:</b> Cuando una restricción depende de varios campos (ej: una película debe tener al menos un título en ES, CA o EN), utilizamos métodos <code>Callback</code>. Esto permite inyectar lógica de validación personalizada que los atributos estándar no pueden cubrir.
</p>

```php
#[Assert\Callback]
public function validate(ExecutionContextInterface $context): void {
    if (!$this->titolEs && !$this->titolCa && !$this->titolEn) {
        $context->buildViolation('La película debe tener al menos un título.')
                ->atPath('titolEs')->addViolation();
    }
}
```

</div>

<div style="margin-bottom: 1rem;">
<p style="color: #fff; font-size: 0.95rem;">
<b>Capa de Negocio Blindada:</b> La combinación de Asserts, Callbacks y Restricciones de DB asegura que ningún dato inconsistente llegue nunca a la capa de persistencia.
</p>
</div>
</details>

</div>

<div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">

## <a id="06-flujo"></a>🛠️ 06 // FLUJO DE DESARROLLO

Ciclo de vida de cada mejora en 7Vision, diseñado para que el sistema nunca pierda su calidad.

<br>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 01 :: PASOS OBLIGATORIOS ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">🚀 Implementación y Calidad</summary>
<br>
Seguir estrictamente los estándares de la Auditoría Técnica: separación MVC clara, validación de datos y manejo uniforme de errores.
</details>

<details style="margin-left: 1rem; margin-bottom: 0.5rem;">
<summary style="cursor: pointer; color: #4facfe;">📝 Registro de Cambios</summary>
<br>
Toda mejora debe quedar registrada en el historial del sistema para que el equipo sepa qué se ha hecho y por qué.

```markdown
- [v2.4.0] :: Implementación del sistema SHIELD
```

- `📍 CHANGELOG.md | API_GUIDE.md`
    </details>
    </details>

</div>

<div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">

## <a id="07-qa"></a>🧪 07 // QA & TESTING_LAB

Protocolo de validación continua para asegurar que el motor de **7Vision** sea siempre robusto, fiable y libre de regresiones.

<br>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 01 :: INFRAESTRUCTURA DE PRUEBAS ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Aislamiento Total (SQLite Test DB):</b> Para garantizar que los tests no alteren los datos reales y se ejecuten a la máxima velocidad, utilizamos una base de datos <b>SQLite en memoria/archivo</b> dedicada exclusivamente al entorno de pruebas.
</p>

```yaml
# .env.test
DATABASE_URL="sqlite:///%kernel.project_dir%/var/test.db"
```

</div>

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Abstracción de Autenticación (ApiTestCase):</b> Hemos creado una clase base que automatiza el flujo de seguridad. Gestiona la creación de usuarios temporales, la obtención del token JWT y su inyección en las cabeceras HTTP, permitiendo escribir tests funcionales limpios y centrados en la lógica.
</p>

```php
abstract class ApiTestCase extends WebTestCase {
    protected function createAuthenticatedClient(string $username = 'testuser') {
        // Autenticación JWT automatizada...
    }
}
```

</div>
</details>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 02 :: SUITE DE PRUEBAS FUNCIONALES (API) ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 2rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Validación de Contratos:</b> Los tests funcionales verifican que los endpoints devuelven los códigos de estado correctos (200 OK, 401 Unauthorized) y que el formato de los datos (JSON) cumple con lo esperado por el Frontend.
</p>

```php
public function testGetMoviesList(): void {
    $client = $this->createAuthenticatedClient();
    $client->request('GET', '/api/pelicules');
    $this->assertResponseIsSuccessful();
    $this->assertResponseHeaderSame('content-type', 'application/json');
}
```

</div>
</details>

<details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 242, 254, 0.1); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
<summary style="cursor: pointer; font-weight: bold; color: #00f2fe;">◢ 03 :: EJECUCIÓN Y MANTENIMIENTO ◣</summary>
<hr style="border: 0; border-top: 1px solid rgba(0, 242, 254, 0.2); margin: 10px 0;">

<div style="margin-bottom: 1.5rem;">
<p style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">
<b>Ciclo de Calidad:</b> Antes de realizar un <i>push</i> o despliegue, es obligatorio ejecutar la suite completa para descartar errores en cadena.
</p>

```bash
# Ejecutar todos los tests
php bin/phpunit

# Preparar la BD de test (si hay cambios en entidades)
php bin/console doctrine:schema:update --force --env=test
```

</div>
</details>

- `📍 tests/Api/MovieApiTest.php`
- `📍 tests/ApiTestCase.php`
      </div>

<div style="height: 1px; background: linear-gradient(to right, transparent, #00f2fe, transparent); margin: 2rem 0;"></div>

<p align="center">
  <code><b>© 2026 7Vision :: SYSTEM_ARCHITECT_LOG</b></code><br>
  <img src="https://img.shields.io/badge/SYS--ADAM-ANTIGRAVITY_AI-00f2fe?style=flat-square&logo=google-cloud&logoColor=black" />
</p>

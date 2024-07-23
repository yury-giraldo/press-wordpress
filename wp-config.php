<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u797583539_Isx0U' );

/** Database username */
define( 'DB_USER', 'u797583539_SN5S0' );

/** Database password */
define( 'DB_PASSWORD', 'SF3QFRC11j' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '$Uh,O6(Mu:~EJ+Q+LEgqn.CPa_7E=k}n~_G8.rC0p`3)ml2GyFWzsankr6JRr}Q$' );
define( 'SECURE_AUTH_KEY',   '?8)P6A^&W;7@ BUwZ~$ad`O<_TmgFMV?qU2_u/=8@.00c;B!++%0>:]my,qH#PyU' );
define( 'LOGGED_IN_KEY',     'gH(q|gbeT(@/u=*|$R5<z<bV!qa7jPyRpvS6CHRJab@sOHFab1#s)`?)1r=kP:x^' );
define( 'NONCE_KEY',         'f)XI_h](?Lwx#^c*wR}lO%C>l:uDGwH^6?f[Y#-gke*aNkoc,8Xw(Q{R{z39zIJb' );
define( 'AUTH_SALT',         'Y+#M7/,K>^s4C^NJoIWrmyBNb+.$=RAx-;|FH0?wAf&|f!~YA~q/$c=+&oQM!`8M' );
define( 'SECURE_AUTH_SALT',  'dN?bj?Iy-^m0 A/Nyy 1heQE:QkE~K_aswMC,]nRdY;uJ`|Ij_a8`9ZRBm@gg<WS' );
define( 'LOGGED_IN_SALT',    'R_7^pl@:?Frr$%P*:S1BM%G}Ob=+!&%Z)RWe4bq>(?kQvZI_20yeikP{s`L=#6Dt' );
define( 'NONCE_SALT',        'Zxr{^_vo$i${VJZ4SZ2Ulv&1&=[+-HR/^ODM|r5HTM9vPboD-Vs7s^vUG^_kgZ^<' );
define( 'WP_CACHE_KEY_SALT', '-4uo%9}Ck^GQr*/e`Hy|9eiaV@9P@+hP!LSyG^Mb^s,L2:[7Nseh;Hxw-Zzz)a/)' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

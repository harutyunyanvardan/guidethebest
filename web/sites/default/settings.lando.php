<?php
/**
 * @file
 * Lando settings file.
 */

if (getenv('LANDO') === 'ON') {
  $lando_info = json_decode(getenv('LANDO_INFO'), TRUE);
  $settings['trusted_host_patterns'] = ['.*'];
  $settings['hash_salt'] = md5(getenv('LANDO_HOST_IP'));
  $databases['default']['default'] = [
    'driver' => 'mysql',
    'database' => $lando_info['database']['creds']['database'],
    'username' => $lando_info['database']['creds']['user'],
    'password' => $lando_info['database']['creds']['password'],
    'host' => $lando_info['database']['internal_connection']['host'],
    'port' => $lando_info['database']['internal_connection']['port'],
  ];

  $config['system.performance']['css']['preprocess'] = FALSE;
  $config['system.performance']['js']['preprocess'] = FALSE;


  $config['devel.settings']['devel_dumper'] = 'var_dumper';

  $settings['container_yamls'][] = DRUPAL_ROOT . '/sites/default/development.services.yml';
}
